# Model

주요 AI 모델들의 벤치마크 성능과 최신 릴리즈 소식을 한눈에 확인하세요.

---

## 🏢 Major Models

```{raw} html
<div style="font-family: Arial, sans-serif;">
  <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; margin-bottom: 30px;">
    
    <!-- OpenAI Card -->
    <div style="background: white; border: 2px solid #10a37f; border-radius: 12px; padding: 15px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
        <span style="font-size: 1.5rem;"><img src="_static/openai.png" style="width: 24px; height: 24px; position: relative; top: -2px;"></span>
        <b style="font-size: 1.1rem;">OpenAI</b>
      </div>
      <div style="background: #10a37f; color: white; padding: 5px 10px; border-radius: 5px; font-size: 0.85rem; margin-bottom: 10px;">GPQA: 92.4%</div>
      <ul style="margin: 0; padding-left: 20px; font-size: 0.9rem; color: #333;">
        <li>GPT-5.2</li>
        <li>GPT-5-Codex-Max</li>
        <li>GPT-OSS</li>
      </ul>
    </div>

    <!-- Google Card -->
    <div style="background: white; border: 2px solid #4285f4; border-radius: 12px; padding: 15px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
        <span style="font-size: 1.5rem;"><img src="_static/google.png" style="width: 24px; height: 24px; position: relative; top: -2px;"></span>
        <b style="font-size: 1.1rem;">Google</b>
      </div>
      <div style="background: #4285f4; color: white; padding: 5px 10px; border-radius: 5px; font-size: 0.85rem; margin-bottom: 10px;">GPQA: 91.9%</div>
      <ul style="margin: 0; padding-left: 20px; font-size: 0.9rem; color: #333;">
        <li>Gemini 3 Flash Preview</li>
        <li>Nano Banana Pro</li>
        <li>Gemini 3 Pro</li>
      </ul>
    </div>

    <!-- xAI Card -->
    <div style="background: white; border: 2px solid #d97706; border-radius: 12px; padding: 15px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
        <span style="font-size: 1.5rem;"><img src="_static/xai.png" style="width: 24px; height: 24px; position: relative; top: -2px;"></span>
        <b style="font-size: 1.1rem;">xAI</b>
      </div>
      <div style="background: #d97706; color: white; padding: 5px 10px; border-radius: 5px; font-size: 0.85rem; margin-bottom: 10px;">GPQA: 87.5%</div>
      <ul style="margin: 0; padding-left: 20px; font-size: 0.9rem; color: #333;">
        <li>Grok 4.1 Fast</li>
        <li>Grok Code Fast</li>
        <li>Grok 4</li>
      </ul>
    </div>

    <!-- Anthropic Card -->
    <div style="background: white; border: 2px solid #0668e1; border-radius: 12px; padding: 15px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
        <span style="font-size: 1.5rem;"><img src="_static/claude.png" style="width: 24px; height: 24px; position: relative; top: -2px;"></span>
        <b style="font-size: 1.1rem;">Anthropic</b>
      </div>
      <div style="background: #0668e1; color: white; padding: 5px 10px; border-radius: 5px; font-size: 0.85rem; margin-bottom: 10px;">GPQA: 87%</div>
      <ul style="margin: 0; padding-left: 20px; font-size: 0.9rem; color: #333;">
        <li>Claude 4.5 Opus</li>
        <li>Claude Haiku 4.5</li>
        <li>Claude 4.5 Sonnet</li>
      </ul>
    </div>

    <!-- Alibaba Cloud Card -->
    <div style="background: white; border: 2px solid #1c3c3c; border-radius: 12px; padding: 15px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
        <span style="font-size: 1.5rem;"><img src="_static/alibabacloud.png" style="width: 24px; height: 24px; position: relative; top: -2px;"></span>
        <b style="font-size: 1.1rem;">Alibaba</b>
      </div>
      <div style="background: #1c3c3c; color: white; padding: 5px 10px; border-radius: 5px; font-size: 0.85rem; margin-bottom: 10px;">GPQA: 77.5%</div>
      <ul style="margin: 0; padding-left: 20px; font-size: 0.9rem; color: #333;">
        <li>Qwen3-VL-2B</li>
        <li>Qwen-3-235B-A22B-Instruct-2507</li>
        <li>Qwen3Guard-Gen-8B</li>
      </ul>
    </div>

    <!-- Meta Card -->
    <div style="background: white; border: 2px solid #7c3aed; border-radius: 12px; padding: 15px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
        <span style="font-size: 1.5rem;"><img src="_static/meta.png" style="width: 24px; height: 24px; position: relative; top: -2px;"></span>
        <b style="font-size: 1.1rem;">Meta</b>
      </div>
      <div style="background: #7c3aed; color: white; padding: 5px 10px; border-radius: 5px; font-size: 0.85rem; margin-bottom: 10px;">GPQA: 73.7%</div>
      <ul style="margin: 0; padding-left: 20px; font-size: 0.9rem; color: #333;">
        <li>SAM3</li>
        <li>GEM</li>
        <li>Llama 4 Behemoth</li>
      </ul>
    </div>

    <!-- DeepSeek Card -->
    <div style="background: white; border: 2px solid #ef4444; border-radius: 12px; padding: 15px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
        <span style="font-size: 1.5rem;"><img src="_static/deepseek.png" style="width: 24px; height: 24px; position: relative; top: -2px;"></span>
        <b style="font-size: 1.1rem;">DeepSeek</b>
      </div>
      <div style="background: #ef4444; color: white; padding: 5px 10px; border-radius: 5px; font-size: 0.85rem; margin-bottom: 10px;">GPQA: 71.5%</div>
      <ul style="margin: 0; padding-left: 20px; font-size: 0.9rem; color: #333;">
        <li>DeepSeek-V3.2</li>
        <li>DeepSeek-OCR</li>
        <li>DeepSeek-R1</li>
      </ul>
    </div>

    <!-- MistralAI Card -->
    <div style="background: white; border: 2px solid #06b6d4; border-radius: 12px; padding: 15px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
        <span style="font-size: 1.5rem;"><img src="_static/mistral.png" style="width: 24px; height: 24px; position: relative; top: -2px;"></span>
        <b style="font-size: 1.1rem;">MistralAI</b>
      </div>
      <div style="background: #06b6d4; color: white; padding: 5px 10px; border-radius: 5px; font-size: 0.85rem; margin-bottom: 10px;">GPQA: 43.9%</div>
      <ul style="margin: 0; padding-left: 20px; font-size: 0.9rem; color: #333;">
        <li>Mistral Large 3</li>
        <li>Magistral</li>
        <li>Mistral Medium 3</li>
      </ul>
    </div>

  </div>
</div>
```

---

## 🔥 Rising Star

```{raw} html
<div style="font-family: Arial, sans-serif;">
  <div style="background: white; border: 2px solid #38bdf8; border-radius: 12px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); display: flex; align-items: center; justify-content: space-between; gap: 20px;">
    <div style="display: flex; align-items: center; gap: 15px;">
      <span style="font-size: 2rem;">🔬</span>
      <div>
        <div style="display: flex; align-items: center; gap: 10px;">
          <span style="color: #94a3b8; font-size: 0.9rem;">Rising Star:</span>
          <b style="font-size: 1.4rem; color: #0ea5e9;">GPT-5.2</b>
          <span style="background: #ef4444; color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem;">🔥 HOT</span>
        </div>
        <p style="margin: 5px 0 0 0; color: #64748b; font-size: 0.9rem;">스프레드시트 생성, 프레젠테이션 제작, 코드 작성, 이미지 인식, 긴 컨텍스트 이해, 도구 활용, 여러 단계에 걸친 복잡한 프로젝트 작업</p>
      </div>
    </div>
    <div style="display: flex; align-items: center; gap: 15px;">
      <div style="text-align: right;">
        <div style="font-size: 1.5rem; font-weight: bold; color: #0ea5e9;">250k+</div>
        <div style="font-size: 0.8rem; color: #94a3b8;">Mentions (2 weeks)</div>
      </div>
      <div style="width: 120px; height: 40px;">
        <svg viewBox="0 0 120 40" style="width: 100%; height: 100%;">
          <defs>
            <linearGradient id="riseGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style="stop-color:#0ea5e9;stop-opacity:0.3"/>
              <stop offset="100%" style="stop-color:#0ea5e9;stop-opacity:0"/>
            </linearGradient>
          </defs>
          <polyline fill="url(#riseGrad)" stroke="none" points="0,40 0,35 15,32 30,28 45,25 60,20 75,15 90,10 105,6 120,3 120,40"/>
          <polyline fill="none" stroke="#0ea5e9" stroke-width="2" points="0,35 15,32 30,28 45,25 60,20 75,15 90,10 105,6 120,3"/>
        </svg>
      </div>
    </div>
  </div>
</div>
```

---

## 📢 Latest Updates

```{raw} html
<div style="font-family: Arial, sans-serif; display: flex; flex-direction: column; gap: 15px;">

  <!-- Gemini 3 Flash Preview Update -->
  <div style="background: white; border-left: 4px solid #1c3c3c; border-radius: 8px; padding: 15px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
      <b style="font-size: 1.1rem;">Gemini 3 Flash Preview</b>
      <span style="background: #3b82f6; color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem;">NEW</span>
    </div>
    <div style="color: #666; font-size: 0.85rem; margin-bottom: 8px;">📅 2025.12.17</div>
    <p style="margin: 0; color: #333; line-height: 1.5;">최적화된 속도를 바탕으로 일상적인 작업을 향상된 추론 성능으로 처리할 수 있습니다.</p>
    <a href="https://blog.google/products/gemini/gemini-3-flash/" style="color: #1c3c3c; font-size: 0.9rem; margin-top: 10px; display: inline-block;">🔗 상세 보기 →</a>
  </div>

  <!-- GPT-5.2 Update -->
  <div style="background: white; border-left: 4px solid #7c3aed; border-radius: 8px; padding: 15px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
      <b style="font-size: 1.1rem;">GPT-5.2</b>
      <span style="background: #f59e0b; color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem;">UPDATE</span>
    </div>
    <div style="color: #666; font-size: 0.85rem; margin-bottom: 8px;">📅 2025.12.11</div>
    <p style="margin: 0; color: #333; line-height: 1.5;">여러 단계에 걸친 복잡한 프로젝트 작업에서 더욱 강화된 성능을 제공합니다.</p>
    <a href="https://openai.com/ko-KR/index/introducing-gpt-5-2/" style="color: #7c3aed; font-size: 0.9rem; margin-top: 10px; display: inline-block;">🔗 상세 보기 →</a>
  </div>

  <!-- Mistral Large 3 Update -->
  <div style="background: white; border-left: 4px solid #10b981; border-radius: 8px; padding: 15px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
      <b style="font-size: 1.1rem;">Mistral Large 3</b>
      <span style="background: #3b82f6; color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem;">UPDATE</span>
    </div>
    <div style="color: #666; font-size: 0.85rem; margin-bottom: 8px;">📅 2025.12.02</div>
    <p style="margin: 0; color: #333; line-height: 1.5;">성능 대비 비용 효율과 최상위 수준의 Instruct Tuning 성능을 Apache 2.0 라이선스로 제공합니다.</p>
    <a href="https://mistral.ai/news/mistral-3" style="color: #10b981; font-size: 0.9rem; margin-top: 10px; display: inline-block;">🔗 상세 보기 →</a>
  </div>

  <!-- DeepSeek-V3.2 Update -->
  <div style="background: white; border-left: 4px solid #06b6d4; border-radius: 8px; padding: 15px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
      <b style="font-size: 1.1rem;">DeepSeek-V3.2</b>
      <span style="background: #ef4444; color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem;">UPDATE</span>
    </div>
    <div style="color: #666; font-size: 0.85rem; margin-bottom: 8px;">📅 2025.12.01</div>
    <p style="margin: 0; color: #333; line-height: 1.5;">높은 계산 효율성과 추론 및 에이전트 성능을 조화롭게 결합한 모델입니다.</p>
    <a href="https://huggingface.co/deepseek-ai/DeepSeek-V3.2" style="color: #06b6d4; font-size: 0.9rem; margin-top: 10px; display: inline-block;">🔗 상세 보기 →</a>
  </div>

  <!-- Nano Banana Pro Update -->
  <div style="background: white; border-left: 4px solid #f97316; border-radius: 8px; padding: 15px; box-shadow: 0 2px 6px rgba(0,0,0,0.08);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
      <b style="font-size: 1.1rem;">Nano Banana Pro</b>
      <span style="background: #f59e0b; color: white; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem;">NEW</span>
    </div>
    <div style="color: #666; font-size: 0.85rem; margin-bottom: 8px;">📅 2025.11.20</div>
    <p style="margin: 0; color: #333; line-height: 1.5;">직접 스케치하고 텍스트로 구체화하여 완벽한 이미지를 제작합니다</p>
    <a href="https://gemini.google/overview/image-generation/" style="color: #f97316; font-size: 0.9rem; margin-top: 10px; display: inline-block;">🔗 상세 보기 →</a>
  </div>

</div>
```
