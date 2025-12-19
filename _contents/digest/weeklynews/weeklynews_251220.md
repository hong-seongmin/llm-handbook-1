# 📕 Weekly News Digest
**Your weekly digest of the most important developments in the LLM ecosystem.**

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

<!-- Dashboard KPI Section -->
::::{grid} 4
:gutter: 3

:::{grid-item-card} 총 뉴스 수
:class-header: bg-dark text-white text-center font-weight-bold
:class-body: bg-secondary text-white text-center
:shadow: md
## 685건
{badge}`+18% 🟢`
:::

:::{grid-item-card} 신규 키워드
:class-header: bg-dark text-white text-center font-weight-bold
:class-body: bg-secondary text-white text-center
:shadow: md
## 42개
{badge}`+9% 🟢`
:::

:::{grid-item-card} 급상승 키워드
:class-header: bg-dark text-white text-center font-weight-bold
:class-body: bg-secondary text-white text-center
:shadow: md
## 9개
{badge}`+3% 🟢`
:::

:::{grid-item-card} 커버리지 출처
:class-header: bg-dark text-white text-center font-weight-bold
:class-body: bg-secondary text-white text-center
:shadow: md
## 31개
:::::
::::

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

