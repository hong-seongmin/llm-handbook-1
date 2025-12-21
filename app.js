
/* app_pretty_v4.js
 * Demo-first UI for "LLM Buzz Share This Week"
 * - Aesthetic ranked grid (no strict area proportional treemap)
 * - Responsive layout (4/6/8 cols)
 * - Custom tooltip card on hover (shows exact share %)
 * - Quick filters (All / Pricing / Security / Policy / Tools)
 * - Top 5 picks: 1 per category (as much as possible), fallback to score
 *
 * Expects index.html to include:
 *  - #treemap-container
 *  - #treemap-normal
 *  - #treemap-zoom, #zoom-title, #zoom-grid
 *  - #top-news
 * And a CSV file at ./news.csv (override with ?csv=filename.csv)
 */

(function () {
  // -----------------------------
  // Small helpers
  // -----------------------------
  const $ = (id) => document.getElementById(id);

  function cleanCategory(cat) {
  return String(cat || "")
    // 1. / 4b. / 10a. / 4b 같은 prefix 제거
    .replace(/^\s*\d+[a-z]?(?:\.\s*|\s+)/i, "")
    .trim();
}


  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function parseDateSafe(s) {
    const t = String(s || "").trim();
    if (!t) return 0;
    // normalize common formats: 2025.12.18, 2025-12-18, 12/18/2025
    const t2 = t.replace(/\./g, "-");
    const d = new Date(t2);
    if (!isNaN(d.getTime())) return d.getTime();
    return 0;
  }

  // Basic CSV parser (handles quotes)
  function parseCSV(text) {
    const rows = [];
    let i = 0, field = "", row = [], inQuotes = false;

    function pushField() {
      row.push(field);
      field = "";
    }
    function pushRow() {
      // ignore empty trailing lines
      if (row.length === 1 && row[0] === "") { row = []; return; }
      rows.push(row);
      row = [];
    }

    while (i < text.length) {
      const c = text[i];

      if (inQuotes) {
        if (c === '"') {
          if (text[i + 1] === '"') { field += '"'; i += 2; continue; }
          inQuotes = false; i++; continue;
        } else {
          field += c; i++; continue;
        }
      } else {
        if (c === '"') { inQuotes = true; i++; continue; }
        if (c === ",") { pushField(); i++; continue; }
        if (c === "\n") { pushField(); pushRow(); i++; continue; }
        if (c === "\r") { i++; continue; }
        field += c; i++; continue;
      }
    }
    pushField();
    pushRow();

    if (!rows.length) return [];
    const header = rows[0].map(h => String(h || "").trim());
    const data = [];
    for (let r = 1; r < rows.length; r++) {
      const obj = {};
      const cols = rows[r];
      header.forEach((h, idx) => { obj[h] = cols[idx] ?? ""; });
      data.push(obj);
    }
    return data;
  }

  // -----------------------------
  // Styling injection (no HTML edits needed)
  // -----------------------------
  function injectStyles() {
    if (document.getElementById("pretty-v4-style")) return;

    const style = document.createElement("style");
    style.id = "pretty-v4-style";
    style.textContent = `
      /* Grid */
      #treemap-normal.treemap-grid {
        display: grid !important;
        gap: 12px !important;
        grid-template-columns: repeat(6, 1fr);
        grid-auto-rows: 110px;
        padding: 10px !important;
        box-sizing: border-box;
        height: 100%;
      }
      @media (max-width: 1100px){
        #treemap-normal.treemap-grid { grid-template-columns: repeat(4, 1fr); }
      }
      @media (max-width: 720px){
        #treemap-normal.treemap-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 105px; }
      }
      @media (min-width: 1600px){
        #treemap-normal.treemap-grid { grid-template-columns: repeat(8, 1fr); }
      }

      .tile {
        border-radius: 14px;
        color: #fff;
        padding: 14px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        cursor: pointer;
        user-select: none;
        box-shadow: 0 2px 10px rgba(0,0,0,0.12);
        border: 2px solid rgba(255,255,255,0.30);
        transition: transform 0.12s ease, filter 0.12s ease;
        overflow: hidden;
      }
      .tile:hover { filter: brightness(1.05); transform: translateY(-1px); }

      /* Sizing tiers: keep everything readable on 14" */
      .tile-xl { grid-column: span 4; grid-row: span 2; }
      .tile-lg { grid-column: span 2; grid-row: span 2; }
      .tile-md { grid-column: span 2; grid-row: span 1; }
      .tile-sm { grid-column: span 2; grid-row: span 1; opacity: 0.96; }

      /* When fewer columns (2-col mobile), spans behave better */
      @media (max-width: 720px){
        .tile-xl { grid-column: span 2; grid-row: span 2; }
        .tile-lg { grid-column: span 2; grid-row: span 1; }
        .tile-md { grid-column: span 2; }
        .tile-sm { grid-column: span 2; }
      }

      /* Filter bar */
      .filterbar {
        display:flex; gap:8px; align-items:center; flex-wrap:wrap;
        padding: 10px 10px 0 10px;
      }
      .filterbtn {
        font-family: inherit;
        font-size: 0.9rem;
        border-radius: 999px;
        padding: 6px 10px;
        border: 1px solid rgba(0,0,0,0.12);
        background: #fff;
        cursor: pointer;
      }
      .filterbtn.active {
        background: #111;
        color: #fff;
        border-color: #111;
      }
      .filterhint {
        font-size: 0.85rem;
        color: #666;
        margin-left: 4px;
      }

      /* Tooltip */
      .pretty-tooltip {
        position: fixed;
        z-index: 99999;
        pointer-events: none;
        min-width: 220px;
        max-width: 320px;
        padding: 10px 12px;
        border-radius: 12px;
        background: rgba(20,20,20,0.92);
        color: #fff;
        box-shadow: 0 10px 30px rgba(0,0,0,0.25);
        border: 1px solid rgba(255,255,255,0.18);
        transform: translate(12px, 12px);
        opacity: 0;
        transition: opacity 0.08s ease;
      }
      .pretty-tooltip.show { opacity: 1; }
      .pretty-tooltip .t { font-weight: 800; font-size: 0.95rem; line-height: 1.15; }
      .pretty-tooltip .m { opacity: 0.85; margin-top: 6px; font-size: 0.86rem; line-height: 1.25; }
      .pretty-tooltip .s { opacity: 0.75; margin-top: 6px; font-size: 0.82rem; }
    `;
    document.head.appendChild(style);
  }

  // -----------------------------
  // Color palette
  // -----------------------------
  const COLORS = [
    ["#e74c3c","#c0392b"], // red
    ["#3498db","#2980b9"], // blue
    ["#27ae60","#1e8449"], // green
    ["#f1c40f","#d4ac0d"], // yellow
    ["#9b59b6","#8e44ad"], // purple
    ["#e67e22","#d35400"], // orange
    ["#16a085","#0e6251"], // teal
    ["#7f8c8d","#616a6b"], // gray
    ["#2c3e50","#1b2631"], // navy
    ["#c2185b","#8e1450"], // magenta
  ];

  // Deterministic category->color mapping based on sorted rank
  function colorForRank(idx) {
    return COLORS[idx % COLORS.length];
  }

  function sizeTier(idx) {
    if (idx === 0) return "xl";      // #1
    if (idx === 1) return "lg";      // #2
    if (idx <= 4) return "md";       // #3-#5
    return "sm";                     // rest
  }

  // -----------------------------
  // Filters
  // -----------------------------
  const FILTERS = [
    { key: "all", label: "All", fn: (_r) => true },
    { key: "pricing", label: "Pricing", fn: (r) => /price|pricing|cost|token|rate|billing|plan/i.test(`${r.title||""} ${r.short_tag||""}`) },
    { key: "security", label: "Security", fn: (r) => /security|vuln|vulnerability|exploit|leak|prompt injection|jailbreak|malware|abuse/i.test(`${r.title||""} ${r.short_tag||""}`) },
    { key: "policy", label: "Policy", fn: (r) => /policy|terms|compliance|regulation|governance|act|law|usage/i.test(`${r.title||""} ${r.short_tag||""}`) },
    { key: "tools", label: "Tools", fn: (r) => /tool|sdk|api|framework|library|release|vllm|langchain|llamaindex|transformers|cuda|mcp|agent/i.test(`${r.title||""} ${r.short_tag||""}`) },
  ];

  let __lastDataAll = [];
  let __activeFilter = "all";
  let __categoryRank = []; // [{cat,n,items}]
  let __categoryIndex = new Map(); // cat -> rank idx

  // -----------------------------
  // Tooltip
  // -----------------------------
  let tooltipEl = null;

  function ensureTooltip() {
    if (tooltipEl) return tooltipEl;
    tooltipEl = document.createElement("div");
    tooltipEl.className = "pretty-tooltip";
    tooltipEl.innerHTML = `<div class="t"></div><div class="m"></div><div class="s"></div>`;
    document.body.appendChild(tooltipEl);
    return tooltipEl;
  }

  function showTooltip(htmlTitle, htmlMain, htmlSmall, x, y) {
    const el = ensureTooltip();
    el.querySelector(".t").innerHTML = htmlTitle;
    el.querySelector(".m").innerHTML = htmlMain;
    el.querySelector(".s").innerHTML = htmlSmall;
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    el.classList.add("show");
  }
  function moveTooltip(x, y) {
    if (!tooltipEl) return;
    tooltipEl.style.left = `${x}px`;
    tooltipEl.style.top = `${y}px`;
  }
  function hideTooltip() {
    if (!tooltipEl) return;
    tooltipEl.classList.remove("show");
  }

  // -----------------------------
  // Zoom view
  // -----------------------------
  function zoomIn(categoryName) {
    const zoomEl  = $("treemap-zoom");
    const titleEl = $("zoom-title");
    const gridEl  = $("zoom-grid");
    if (!zoomEl || !titleEl || !gridEl) return;

    const rankIdx = __categoryIndex.get(categoryName) ?? 0;
    const [c1,c2] = colorForRank(rankIdx);
    zoomEl.style.background = `linear-gradient(135deg, ${c1}, ${c2})`;
    zoomEl.style.color = "#fff";

    const filtered = applyFilter(__lastDataAll, __activeFilter);
    const grouped = groupByCategory(filtered);
    const items = grouped[categoryName] || [];

    titleEl.textContent = `🔎 ${categoryName} (${items.length})`;
    gridEl.innerHTML = "";

    // sort newest first (best-effort)
    items.sort((a,b) => parseDateSafe(b.date) - parseDateSafe(a.date));

    items.forEach(row => {
      const card = document.createElement("div");
      card.style.cssText = `
        flex: 1 1 240px;
        min-width: 240px;
        background: rgba(255,255,255,0.16);
        border: 1px solid rgba(255,255,255,0.20);
        padding: 12px;
        border-radius: 12px;
        box-sizing: border-box;
      `;

      const url = String(row.url || "").trim();
      card.innerHTML = `
        <div style="font-weight:900; font-size:1.02rem; line-height:1.2;">
          ${escapeHtml(row.title || "(no title)")}
        </div>
        <div style="margin-top:8px; font-size:0.86rem; opacity:0.93; line-height:1.35;">
          ${escapeHtml(row.short_tag || "")}
        </div>
        <div style="margin-top:10px; font-size:0.78rem; opacity:0.85; display:flex; justify-content:space-between; gap:8px; flex-wrap:wrap;">
          <span>${escapeHtml(row.source || "")}</span>
          <span>${escapeHtml(row.date || "")}</span>
        </div>
        ${url ? `<div style="margin-top:10px;">
          <a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer"
             style="color:#fff; text-decoration:underline; font-size:0.84rem;">
            원문 보기 →
          </a></div>` : ""}
      `;
      gridEl.appendChild(card);
    });

    $("treemap-normal").style.display = "none";
    zoomEl.style.display = "block";
  }

  window.zoomOut = function zoomOut() {
    const zoomEl = $("treemap-zoom");
    const normal = $("treemap-normal");
    if (zoomEl) zoomEl.style.display = "none";
    if (normal) normal.style.display = "grid";
  };

  // -----------------------------
  // Grouping and filtering
  // -----------------------------
  function applyFilter(rows, filterKey) {
    const f = FILTERS.find(x => x.key === filterKey) || FILTERS[0];
    return rows.filter(f.fn);
  }

  function groupByCategory(rows) {
    return rows.reduce((acc, row) => {
      const cat = cleanCategory(row.category_refined || row.category || "Uncategorized");
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(row);
      return acc;
    }, {});
  }

  function buildCategoryRank(filteredRows) {
    const grouped = groupByCategory(filteredRows);
    const categories = Object.keys(grouped)
      .map(cat => ({ cat, n: grouped[cat].length, items: grouped[cat] }))
      .sort((a,b) => b.n - a.n);

    __categoryRank = categories;
    __categoryIndex = new Map(categories.map((c, idx) => [c.cat, idx]));
    return { grouped, categories };
  }

  // -----------------------------
  // Top picks selection (diverse by category)
  // -----------------------------
  function computeNewsScore(row) {
    // Heuristic: action-forcing keywords + recency
    const text = `${row.title || ""} ${row.short_tag || ""}`.toLowerCase();
    let score = 0;
    const KEY = [
      ["deprecat", 6], ["sunset", 6], ["breaking", 5], ["outage", 6],
      ["pricing", 6], ["price", 5], ["cost", 5], ["token", 4],
      ["security", 7], ["vuln", 7], ["exploit", 7], ["leak", 6], ["jailbreak", 6],
      ["policy", 4], ["terms", 4], ["license", 4],
      ["api", 3], ["sdk", 3], ["release", 3],
    ];
    for (const [k,w] of KEY) if (text.includes(k)) score += w;
    score += Math.min(5, (parseDateSafe(row.date) ? 2 : 0)); // tiny bump if date parses
    score += (parseDateSafe(row.date) / 1e13); // very small recency factor
    return score;
  }

  function getManualTopUrls() {
    try {
      const raw = localStorage.getItem("manual_top_urls_v1");
      if (!raw) return null;
      const arr = JSON.parse(raw);
      return Array.isArray(arr) ? arr : null;
    } catch (e) {
      return null;
    }
  }

  // Top picks UI with category color matching
  function renderTopPicks(filteredRows) {
    const host = $("top-news");
    if (!host) return;
    host.innerHTML = "";

    const manualUrls = getManualTopUrls();
    let picks = [];

    if (manualUrls) {
      // keep manual order
      const byUrl = new Map(filteredRows.map(r => [String(r.url || "").trim(), r]));
      manualUrls.forEach(u => {
        const row = byUrl.get(u);
        if (row) picks.push(row);
      });
    }

    // Auto fill: 1 per category first
    if (picks.length < 5) {
      const alreadyUrl = new Set(picks.map(r => String(r.url || "").trim()));
      const alreadyCat = new Set(picks.map(r => cleanCategory(r.category_refined || r.category || "Uncategorized")));

      const bestByCat = new Map();
      const countByCat = new Map();

      for (const r of filteredRows) {
        const cat = cleanCategory(r.category_refined || r.category || "Uncategorized");
        countByCat.set(cat, (countByCat.get(cat) || 0) + 1);
        const s = computeNewsScore(r);
        const cur = bestByCat.get(cat);
        if (!cur || s > cur.score) bestByCat.set(cat, { row: r, score: s });
      }

      const catRank = Array.from(bestByCat.keys())
        .map(cat => ({ cat, n: countByCat.get(cat) || 0, best: bestByCat.get(cat) }))
        .sort((a,b) => (b.n - a.n) || ((b.best?.score||0) - (a.best?.score||0)));

      for (const item of catRank) {
        if (picks.length >= 5) break;
        const r = item.best.row;
        const u = String(r.url || "").trim();
        const c = cleanCategory(r.category_refined || r.category || "Uncategorized");
        if (alreadyCat.has(c)) continue;
        if (!alreadyUrl.has(u)) {
          picks.push(r);
          alreadyUrl.add(u);
          alreadyCat.add(c);
        }
      }

      // Fallback: highest score overall
      if (picks.length < 5) {
        const scored = filteredRows
          .map(r => ({ r, s: computeNewsScore(r) }))
          .sort((a,b) => b.s - a.s)
          .map(x => x.r);
        for (const r of scored) {
          if (picks.length >= 5) break;
          const u = String(r.url || "").trim();
          if (!alreadyUrl.has(u)) {
            picks.push(r);
            alreadyUrl.add(u);
          }
        }
      }
    }

    // Render cards
    picks.slice(0, 5).forEach((row) => {
      const catRaw = cleanCategory(row.category_refined || row.category || "Uncategorized");
      const rankIdx = __categoryIndex.get(catRaw) ?? 0;
      const [c1, c2] = colorForRank(rankIdx);

      const card = document.createElement("a");
      const url = String(row.url || "").trim();
      card.href = url || "#";
      card.target = "_blank";
      card.rel = "noopener noreferrer";

      // left border matches category color
      const border = c1;

      card.style.cssText = `
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:12px;
        padding:14px 16px;
        margin: 10px 0;
        border-radius: 14px;
        border: 1px solid rgba(0,0,0,0.06);
        border-left: 8px solid ${border};
        background: #fff;
        box-shadow: 0 2px 10px rgba(0,0,0,0.06);
        text-decoration:none;
        color:#111;
      `;

      const title = escapeHtml(row.title || "(no title)");
      const short = escapeHtml(row.short_tag || "");
      const src = escapeHtml(row.source || "");
      const date = escapeHtml(row.date || "");

      const left = document.createElement("div");
      left.style.cssText = "min-width:0; flex:1 1 auto;";
      left.innerHTML = `
        <div style="display:flex; gap:10px; align-items:center; flex-wrap:wrap;">
          <span style="
            font-size:0.78rem; font-weight:800; padding:4px 8px; border-radius:999px;
            background:${c2}; color:#fff; opacity:0.95;
          ">${escapeHtml(catRaw)}</span>
          <span style="font-size:0.82rem; color:#666;">${date}</span>
          <span style="font-size:0.82rem; color:#888;">· ${src}</span>
        </div>
        <div style="margin-top:8px; font-size:1.02rem; font-weight:900; line-height:1.25;">
          ${title}
        </div>
        <div style="margin-top:6px; color:#666; font-size:0.92rem; line-height:1.2; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">
          ${short}
        </div>
      `;

      const right = document.createElement("div");
      right.style.cssText = `color:${border}; font-size:1.5rem; font-weight:900; flex:0 0 auto;`;
      right.textContent = "→";

      card.appendChild(left);
      card.appendChild(right);
      host.appendChild(card);
    });
  }

  // -----------------------------
  // Filter bar UI
  // -----------------------------
  function ensureFilterBar() {
    const container = $("treemap-container");
    if (!container) return;

    // Place filter bar above the treemap container
    let bar = document.getElementById("filterbar-v4");
    if (bar) return;

    bar = document.createElement("div");
    bar.id = "filterbar-v4";
    bar.className = "filterbar";

    const label = document.createElement("span");
    label.className = "filterhint";
    label.textContent = "Quick filter:";

    bar.appendChild(label);

    FILTERS.forEach(f => {
      const b = document.createElement("button");
      b.className = "filterbtn" + (f.key === __activeFilter ? " active" : "");
      b.textContent = f.label;
      b.onclick = () => {
        __activeFilter = f.key;
        // update active classes
        Array.from(bar.querySelectorAll(".filterbtn")).forEach(btn => {
          btn.classList.toggle("active", btn.textContent === f.label);
        });
        renderAll();
      };
      bar.appendChild(b);
    });

    // Insert bar before the container (same parent)
    container.parentNode.insertBefore(bar, container);
  }

  // -----------------------------
  // Main render (grid tiles + top picks)
  // -----------------------------
  function renderTiles(categories, totalCount) {
    const normalEl = $("treemap-normal");
    if (!normalEl) return;

    normalEl.classList.add("treemap-grid");
    normalEl.style.display = "grid";
    normalEl.innerHTML = "";

    // Ensure container can show all rows (avoid cutting off)
    const container = $("treemap-container");
    if (container) {
      container.style.overflow = "visible";
      container.style.height = "auto";
    }

    categories.forEach((item, idx) => {
      const tier = sizeTier(idx);
      const [c1,c2] = colorForRank(idx);

      const tile = document.createElement("div");
      tile.className = `tile tile-${tier}`;
      tile.style.background = `linear-gradient(135deg, ${c1}, ${c2})`;

      const share = totalCount ? ((item.n / totalCount) * 100).toFixed(1) : "0.0";

      const titleSize =
        tier === "xl" ? "clamp(1.2rem, 2.2vw, 2.05rem)" :
        tier === "lg" ? "clamp(1.05rem, 1.7vw, 1.65rem)" :
        "clamp(0.98rem, 1.25vw, 1.25rem)";

      const subSize = "clamp(0.78rem, 0.95vw, 0.96rem)";

      // No "click" text; keep it clean
      tile.innerHTML = `
        <div style="
          font-weight:900;
          font-size:${titleSize};
          line-height:1.15;
          max-width: 96%;
          overflow:hidden;
          text-overflow:ellipsis;
          white-space:nowrap;
        ">${escapeHtml(item.cat)}</div>
        <div style="margin-top:10px; opacity:0.85; font-size:${subSize};">
          ${item.n} items
        </div>
      `;

      // Custom tooltip
      tile.addEventListener("mouseenter", (e) => {
        showTooltip(
          escapeHtml(item.cat),
          `${item.n} items <span style="opacity:0.7;">·</span> <b>${share}%</b> of this view`,
          `Hover shows exact share. Click to zoom.`,
          e.clientX, e.clientY
        );
      });
      tile.addEventListener("mousemove", (e) => moveTooltip(e.clientX, e.clientY));
      tile.addEventListener("mouseleave", () => hideTooltip());

      tile.onclick = () => zoomIn(item.cat);
      normalEl.appendChild(tile);
    });
  }

  function renderAll() {
    injectStyles();
    ensureFilterBar();

    const filtered = applyFilter(__lastDataAll, __activeFilter);
    const { categories } = buildCategoryRank(filtered);
    const totalCount = categories.reduce((a,b)=>a+b.n,0);

    // tiles
    renderTiles(categories.slice(0, 10), totalCount);

    // top picks (diverse) from this filtered view
    renderTopPicks(filtered);
  }

  // -----------------------------
  // CSV loading
  // -----------------------------
  function getCsvPath() {
    const qs = new URLSearchParams(location.search);
    return qs.get("csv") || "news.csv";
  }

  async function boot() {
    injectStyles();
    ensureFilterBar();

    const csvPath = "./" + getCsvPath();
    try {
      const res = await fetch(csvPath, { cache: "no-store" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const csvText = await res.text();
      const rows = parseCSV(csvText);

      // normalize fields we use
      __lastDataAll = rows.map(r => ({
        category_refined: r.category_refined || r.refined_category || r.category || "",
        category: r.category || r.category_refined || "",
        title: r.title || "",
        short_tag: r.short_tag || r.summary || "",
        url: r.url || "",
        source: r.source || "",
        date: r.date || "",
      }));

      renderAll();
    } catch (err) {
      console.error("CSV 로드 실패:", err);
      const normalEl = $("treemap-normal");
      if (normalEl) {
        normalEl.innerHTML = `<div style="padding:14px;color:#b00;">
          CSV 로드 실패: ${escapeHtml(String(err && err.message ? err.message : err))}
          <div style="margin-top:8px;color:#666;">파일 경로 확인: <code>${escapeHtml(csvPath)}</code></div>
        </div>`;
      }
    }
  }

  // Re-render on resize (responsive grid + tooltip)
  window.addEventListener("resize", () => {
    if (__lastDataAll && __lastDataAll.length) renderAll();
  });

  // If zoom view is visible, hide tooltip (prevents stray overlay)
  document.addEventListener("click", () => hideTooltip());

  boot();
})();
