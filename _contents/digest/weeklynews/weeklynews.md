# 📕 Weekly News Digest
### Your weekly digest of the most important developments in the LLM ecosystem.

<!-- Treemap with In-Block Drill-down -->
```{raw} html
<div style="font-family: Arial, sans-serif; margin-bottom: 2rem;">
  <h3 style="text-align: center; margin-bottom: 1rem; color: #333;">📊 LLM Buzz Share This Week <span style="font-size:0.8rem; color:#666;">(클릭해서 확대)</span></h3>
  
  <div id="treemap-container" style="position: relative; height: 320px; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
    
    <!-- Normal View -->
    <div id="treemap-normal" style="display: flex; gap: 4px; height: 100%;">
      <!-- Left Column -->
      <div style="flex: 2; display: flex; flex-direction: column; gap: 4px;">
        <div onclick="zoomIn('openai')" style="flex: 2; background: linear-gradient(135deg, #e74c3c, #c0392b); color: white; display: flex; align-items: center; justify-content: center; text-align: center; padding: 10px; cursor: pointer; transition: all 0.3s;" onmouseover="this.style.filter='brightness(1.1)'" onmouseout="this.style.filter='brightness(1)'">
          <div><b style="font-size: 1.4rem;">OpenAI</b><br>API Pricing<br><small style="opacity:0.7;">🔍 클릭</small></div>
        </div>
        <div style="flex: 1; display: flex; gap: 4px;">
          <div onclick="zoomIn('opensource')" style="flex: 2; background: linear-gradient(135deg, #27ae60, #1e8449); color: white; display: flex; align-items: center; justify-content: center; text-align: center; padding: 8px; cursor: pointer;" onmouseover="this.style.filter='brightness(1.1)'" onmouseout="this.style.filter='brightness(1)'">
            <div><b>Open Source</b></div>
          </div>
          <div style="flex: 1; background: #7f8c8d; color: white; display: flex; align-items: center; justify-content: center; font-size: 0.8rem;">Rumors</div>
        </div>
      </div>
      <!-- Middle Column -->
      <div style="flex: 1; display: flex; flex-direction: column; gap: 4px;">
        <div onclick="zoomIn('anthropic')" style="flex: 1.2; background: linear-gradient(135deg, #f1c40f, #d4ac0d); color: #333; display: flex; align-items: center; justify-content: center; text-align: center; padding: 8px; cursor: pointer;" onmouseover="this.style.filter='brightness(1.1)'" onmouseout="this.style.filter='brightness(1)'">
          <div><b>Anthropic</b></div>
        </div>
        <div style="flex: 0.6; background: #95a5a6;"></div>
        <div style="flex: 1; display: flex; gap: 4px;">
          <div style="flex: 1; background: linear-gradient(135deg, #e67e22, #d35400); color: white; display: flex; align-items: center; justify-content: center; text-align: center; font-size: 0.75rem;">Multi</div>
          <div style="flex: 1; background: linear-gradient(135deg, #9b59b6, #8e44ad); color: white; display: flex; align-items: center; justify-content: center; text-align: center; font-size: 0.75rem;">Reg</div>
        </div>
      </div>
      <!-- Right Column -->
      <div onclick="zoomIn('agent')" style="flex: 1.2; background: linear-gradient(135deg, #3498db, #2980b9); color: white; display: flex; align-items: center; justify-content: center; text-align: center; padding: 10px; cursor: pointer;" onmouseover="this.style.filter='brightness(1.1)'" onmouseout="this.style.filter='brightness(1)'">
        <div><b style="font-size: 1.1rem;">Agent</b><br>Framework<br><small style="opacity:0.7;">🔍</small></div>
      </div>
    </div>

    <!-- Zoomed Views (hidden by default) -->
    <div id="zoom-openai" style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; background: linear-gradient(135deg, #e74c3c, #c0392b); padding: 20px; box-sizing: border-box; color: white;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
        <h4 style="margin:0;">🔴 OpenAI - API Pricing Change</h4>
        <button onclick="zoomOut()" style="background: rgba(255,255,255,0.2); border: none; color: white; padding: 8px 15px; border-radius: 5px; cursor: pointer;">← 돌아가기</button>
      </div>
      <div style="display: flex; gap: 10px; flex-wrap: wrap; height: calc(100% - 50px);">
        <div style="flex: 1; min-width: 120px; background: rgba(255,255,255,0.15); padding: 15px; border-radius: 8px; display: flex; flex-direction: column; justify-content: center; text-align: center;">
          <b style="font-size: 1.2rem;">가격 인상</b><br><span style="font-size: 2rem;">+45%</span>
        </div>
        <div style="flex: 1; min-width: 120px; background: rgba(255,255,255,0.15); padding: 15px; border-radius: 8px; display: flex; flex-direction: column; justify-content: center; text-align: center;">
          <b style="font-size: 1.2rem;">GPT-5 루머</b><br><span style="font-size: 2rem;">+30%</span>
        </div>
        <div style="flex: 1; min-width: 120px; background: rgba(255,255,255,0.15); padding: 15px; border-radius: 8px; display: flex; flex-direction: column; justify-content: center; text-align: center;">
          <b style="font-size: 1.2rem;">Sora 업데이트</b><br><span style="font-size: 2rem;">+15%</span>
        </div>
      </div>
    </div>

    <div id="zoom-agent" style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; background: linear-gradient(135deg, #3498db, #2980b9); padding: 20px; box-sizing: border-box; color: white;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
        <h4 style="margin:0;">🔵 Agent Framework - Major Release</h4>
        <button onclick="zoomOut()" style="background: rgba(255,255,255,0.2); border: none; color: white; padding: 8px 15px; border-radius: 5px; cursor: pointer;">← 돌아가기</button>
      </div>
      <div style="display: flex; gap: 10px; flex-wrap: wrap; height: calc(100% - 50px);">
        <div style="flex: 1; min-width: 100px; background: rgba(255,255,255,0.15); padding: 15px; border-radius: 8px; text-align: center;"><b>LangGraph 2.0</b><br>스테이트 머신</div>
        <div style="flex: 1; min-width: 100px; background: rgba(255,255,255,0.15); padding: 15px; border-radius: 8px; text-align: center;"><b>CrewAI</b><br>멀티에이전트</div>
        <div style="flex: 1; min-width: 100px; background: rgba(255,255,255,0.15); padding: 15px; border-radius: 8px; text-align: center;"><b>AutoGen</b><br>MS 오픈소스</div>
      </div>
    </div>

    <div id="zoom-anthropic" style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; background: linear-gradient(135deg, #f1c40f, #d4ac0d); padding: 20px; box-sizing: border-box; color: #333;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
        <h4 style="margin:0;">🟡 Anthropic - Tooling Update</h4>
        <button onclick="zoomOut()" style="background: rgba(0,0,0,0.1); border: none; color: #333; padding: 8px 15px; border-radius: 5px; cursor: pointer;">← 돌아가기</button>
      </div>
      <div style="display: flex; gap: 10px; height: calc(100% - 50px);">
        <div style="flex: 1; background: rgba(0,0,0,0.1); padding: 15px; border-radius: 8px; text-align: center; display: flex; align-items: center; justify-content: center;"><b>MCP 프로토콜</b></div>
        <div style="flex: 1; background: rgba(0,0,0,0.1); padding: 15px; border-radius: 8px; text-align: center; display: flex; align-items: center; justify-content: center;"><b>Claude 3.5 업데이트</b></div>
      </div>
    </div>

    <div id="zoom-opensource" style="display:none; position:absolute; top:0; left:0; width:100%; height:100%; background: linear-gradient(135deg, #27ae60, #1e8449); padding: 20px; box-sizing: border-box; color: white;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
        <h4 style="margin:0;">🟢 Open Source Eval</h4>
        <button onclick="zoomOut()" style="background: rgba(255,255,255,0.2); border: none; color: white; padding: 8px 15px; border-radius: 5px; cursor: pointer;">← 돌아가기</button>
      </div>
      <div style="display: flex; gap: 10px; height: calc(100% - 50px);">
        <div style="flex: 1; background: rgba(255,255,255,0.15); padding: 15px; border-radius: 8px; text-align: center; display: flex; align-items: center; justify-content: center;"><b>LMSys 벤치마크</b></div>
        <div style="flex: 1; background: rgba(255,255,255,0.15); padding: 15px; border-radius: 8px; text-align: center; display: flex; align-items: center; justify-content: center;"><b>HuggingFace 리더보드</b></div>
      </div>
    </div>

  </div>

  <script>
    function zoomIn(id) {
      document.getElementById('treemap-normal').style.display = 'none';
      document.getElementById('zoom-' + id).style.display = 'block';
    }
    function zoomOut() {
      document.querySelectorAll('[id^="zoom-"]').forEach(el => el.style.display = 'none');
      document.getElementById('treemap-normal').style.display = 'flex';
    }
  </script>
</div>
```

<!-- Dashboard Stats + Trending Keywords -->
```{raw} html
<style>
  @media (max-width: 700px) {
    .stats-row { flex-direction: column !important; }
    .trending-row1 { flex-direction: column !important; gap: 10px !important; }
    .trending-row2 { justify-content: center !important; gap: 12px !important; }
  }
</style>

<div style="font-family: Arial, sans-serif; margin-bottom: 2rem;">
  
  <!-- Small Stats Row -->
  <div class="stats-row" style="display: flex; gap: 15px; margin-bottom: 20px;">
    <div style="flex: 1; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 15px 18px; display: flex; justify-content: space-between; align-items: center;">
      <span style="color: #475569; font-size: 1rem; font-weight: 500; white-space: nowrap;">총 뉴스 수</span>
      <span style="font-weight: bold; font-size: 1.2rem; color: #1e293b; white-space: nowrap;">685건 <span style="color: #16a34a; font-size: 0.9rem; font-weight: 600;">+18%</span></span>
    </div>
    <div style="flex: 1; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 15px 18px; display: flex; justify-content: space-between; align-items: center;">
      <span style="color: #475569; font-size: 1rem; font-weight: 500; white-space: nowrap;">신규 키워드</span>
      <span style="font-weight: bold; font-size: 1.2rem; color: #1e293b; white-space: nowrap;">42개 <span style="color: #16a34a; font-size: 0.9rem; font-weight: 600;">+9%</span></span>
    </div>
    <div style="flex: 1; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 15px 18px; display: flex; justify-content: space-between; align-items: center;">
      <span style="color: #475569; font-size: 1rem; font-weight: 500; white-space: nowrap;">커버리지 출처</span>
      <span style="font-weight: bold; font-size: 1.2rem; color: #1e293b; white-space: nowrap;">31개</span>
    </div>
  </div>

  <!-- Prominent Trending Keywords - Compact 2 Row Layout -->
  <div style="background: linear-gradient(135deg, #0f172a, #1e293b); border-radius: 12px; padding: 20px 24px; color: white;">
    <!-- Row 1: Title + Top Keyword -->
    <div class="trending-row1" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
      <div style="display: flex; align-items: center; gap: 8px; white-space: nowrap;">
        <span style="font-size: 1.1rem;">🔥</span>
        <span style="font-size: 1rem; color: #f8fafc; font-weight: 600;">급상승 키워드</span>
      </div>
      <div style="display: flex; align-items: center; gap: 10px; white-space: nowrap;">
        <span style="background: #ef4444; color: white; padding: 3px 8px; border-radius: 4px; font-size: 0.75rem; font-weight: 600;">+245%</span>
        <span style="font-size: 1.6rem; font-weight: bold; color: #ffffff;">MCP Protocol</span>
      </div>
    </div>
    <!-- Row 2: Other Keywords -->
    <div class="trending-row2" style="display: flex; justify-content: flex-end; align-items: center; gap: 20px; flex-wrap: wrap;">
      <div style="display: flex; align-items: center; gap: 6px; white-space: nowrap;">
        <span style="background: #f97316; color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.7rem; font-weight: 600;">+189%</span>
        <span style="font-size: 1.1rem; font-weight: bold; color: #f1f5f9;">DSPy</span>
      </div>
      <div style="display: flex; align-items: center; gap: 6px; white-space: nowrap;">
        <span style="background: #eab308; color: #1e293b; padding: 2px 6px; border-radius: 4px; font-size: 0.7rem; font-weight: 600;">+156%</span>
        <span style="font-size: 1rem; font-weight: bold; color: #e2e8f0;">LangGraph</span>
      </div>
      <div style="display: flex; align-items: center; gap: 6px; white-space: nowrap;">
        <span style="background: #22c55e; color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.7rem; font-weight: 600;">+134%</span>
        <span style="font-size: 0.95rem; font-weight: bold; color: #cbd5e1;">Gemini 2.0</span>
      </div>
      <div style="display: flex; align-items: center; gap: 6px; white-space: nowrap;">
        <span style="background: #3b82f6; color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.7rem; font-weight: 600;">+98%</span>
        <span style="font-size: 0.9rem; font-weight: bold; color: #94a3b8;">Claude 3.5</span>
      </div>
    </div>
  </div>

</div>
```

<br>

## 📰 최근 뉴스

```{raw} html
<div style="font-family: Arial, sans-serif; display: flex; flex-direction: column; gap: 12px; margin-bottom: 20px;">

  <!-- News 1 -->
  <div style="background: white; border-left: 4px solid #e74c3c; border-radius: 8px; padding: 15px; box-shadow: 0 2px 6px rgba(0,0,0,0.08); display: flex; justify-content: space-between; align-items: center;">
    <div>
      <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 5px;">
        <span style="background: #e74c3c; color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem;">OpenAI</span>
        <span style="color: #666; font-size: 0.85rem;">📅 2025.12.17</span>
      </div>
      <b style="font-size: 1rem; color: #333;">GPT-5 Turbo 출시 임박, API 가격 30% 인하 발표</b>
    </div>
    <span style="color: #e74c3c; font-size: 1.5rem;">→</span>
  </div>

  <!-- News 2 -->
  <div style="background: white; border-left: 4px solid #3498db; border-radius: 8px; padding: 15px; box-shadow: 0 2px 6px rgba(0,0,0,0.08); display: flex; justify-content: space-between; align-items: center;">
    <div>
      <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 5px;">
        <span style="background: #3498db; color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem;">Agent</span>
        <span style="color: #666; font-size: 0.85rem;">📅 2025.12.16</span>
      </div>
      <b style="font-size: 1rem; color: #333;">LangGraph 2.0 정식 출시 - 멀티 에이전트 오케스트레이션</b>
    </div>
    <span style="color: #3498db; font-size: 1.5rem;">→</span>
  </div>

  <!-- News 3 -->
  <div style="background: white; border-left: 4px solid #f1c40f; border-radius: 8px; padding: 15px; box-shadow: 0 2px 6px rgba(0,0,0,0.08); display: flex; justify-content: space-between; align-items: center;">
    <div>
      <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 5px;">
        <span style="background: #f1c40f; color: #333; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem;">Anthropic</span>
        <span style="color: #666; font-size: 0.85rem;">📅 2025.12.15</span>
      </div>
      <b style="font-size: 1rem; color: #333;">Claude MCP 프로토콜, 개발자 도구 통합 확대</b>
    </div>
    <span style="color: #f1c40f; font-size: 1.5rem;">→</span>
  </div>

  <!-- News 4 -->
  <div style="background: white; border-left: 4px solid #27ae60; border-radius: 8px; padding: 15px; box-shadow: 0 2px 6px rgba(0,0,0,0.08); display: flex; justify-content: space-between; align-items: center;">
    <div>
      <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 5px;">
        <span style="background: #27ae60; color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem;">Open Source</span>
        <span style="color: #666; font-size: 0.85rem;">📅 2025.12.14</span>
      </div>
      <b style="font-size: 1rem; color: #333;">DeepSeek V3, MMLU 벤치마크에서 GPT-4 추월</b>
    </div>
    <span style="color: #27ae60; font-size: 1.5rem;">→</span>
  </div>

  <!-- News 5 -->
  <div style="background: white; border-left: 4px solid #9b59b6; border-radius: 8px; padding: 15px; box-shadow: 0 2px 6px rgba(0,0,0,0.08); display: flex; justify-content: space-between; align-items: center;">
    <div>
      <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 5px;">
        <span style="background: #9b59b6; color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem;">Regulation</span>
        <span style="color: #666; font-size: 0.85rem;">📅 2025.12.13</span>
      </div>
      <b style="font-size: 1rem; color: #333;">EU AI Act 시행령 발표, 고위험 AI 규제 강화</b>
    </div>
    <span style="color: #9b59b6; font-size: 1.5rem;">→</span>
  </div>

</div>
```

<br>

<!-- Main Trend Chart -->
::::{card} 📈 이번 주 주요 키워드 추이
:class-header: bg-dark text-white
:shadow: lg

**GPT-4 / RAG / Vector DB 7일간 언급량 변화**

```{mermaid}
%%{init: {
  'theme': 'base',
  'themeVariables': {
    'xyChart': { 'plotColorPalette': '#7289da, #43b581, #faa61a' },
    'fontFamily': 'arial',
    'darkMode': true
  }
}}%%
xychart-beta
    title "Weekly Keyword Trend"
    x-axis ["11-09", "11-10", "11-11", "11-12", "11-13", "11-14", "11-15"]
    y-axis "Volume" 0 --> 60
    line [32, 28, 40, 52, 48, 55, 50]
    line [18, 22, 24, 30, 35, 38, 36]
    line [10, 12, 14, 18, 20, 25, 23]
```
<center>
<span style="color:#7289da"><b>🔵 GPT-4</b></span> &nbsp;&nbsp;
<span style="color:#43b581"><b>🟢 RAG</b></span> &nbsp;&nbsp;
<span style="color:#faa61a"><b>🟠 Vector DB</b></span>
</center>
::::

<br>

::::{div} p-3 bg-light border rounded mb-5 shadow-sm
**Summary & Why it Matters**
^^^
Define evaluation criteria before implementing an AI application.
::::

## 📊 Analytics Deep Dive

::::{tab-set}

:::{tab-item} 📋 Evidence Layer
**Why it Matters**: 배포되었지만 평가할 수 없는 애플리케이션이 더 나쁩니다.
> "투자 대비 수익(ROI)이 불확실한 AI 애플리케이션은 안타깝게도 흔합니다." - *Chip Huyen*

```{mermaid}
graph LR
    A[Eval System] -->|Defines| B(Criteria)
    A -->|Analyzes| C{ROI}
    B --> D[Accuracy]
    B --> E[Latency]
    C -->|High| F[Approve]
    C -->|Low| G[Reject]
    style A fill:#f9f,stroke:#333
    style F fill:#9f9,stroke:#333
```
:::

:::{tab-item} 🥧 Topic Share
**Market Distribution**
```{mermaid}
%%{init: {'theme': 'base', 'themeVariables': { 'pie1': '#7289da', 'pie2': '#43b581', 'pie3': '#faa61a', 'pie4': '#f04747' }}}%%
pie showData
    title AI Trends
    "LLM Architecture" : 40
    "Agent Frameworks" : 35
    "Dev Tools (MCP)" : 15
    "Robotics" : 10
```
:::

:::{tab-item} 🛣️ Roadmap (Q3)
**Development Milestones**
```{mermaid}
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#ffcc00', 'secondaryColor': '#ff9900' }}}%%
gantt
    dateFormat  YYYY-MM-DD
    section Backend
    Database Setup       :a1, 2025-07-01, 7d
    API Development      :after a1, 14d
    section Frontend
    Mockup Design        :2025-07-05, 5d
    UI Implementation    :2025-07-12, 10d
```
:::
::::
