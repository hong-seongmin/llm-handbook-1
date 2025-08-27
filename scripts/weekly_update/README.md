### 환경변수
- github 정책으로 Token을 하드코딩할 수 없어 .env 파일을 생성해 환경변수를 입력해 실행해야합니다.
```bash
# .env 파일
NOTION_DB_ID = ""
NOTION_SECRET_TOKEN = ""
GITHUB_TOKEN = ""
```

### 작업 이슈 사항
- 'AI 정보: 데이터 소스 & 찾은 컨텐츠'에서 Score가 없는 경우는 제외했습니다.
- 'AI 정보: 데이터 소스 & 찾은 컨텐츠'에 'AI Summary', 'Why it matters'를 컬럼이 아닌 페이지 내부에 작성된 경우가 종종 있었습니다.
- 'AI summary'에 markdown 형식으로 작성되어서 weekly_news.md의 형식이 깨지는 경우도 종종 있었습니다.
- 이전 주차의 소식들을 토글로 접으려 했지만 jupyterbook 페이지에서 목차와 하단 부분이 깨져버려서 최신 주차 순으로 나열하게만 구성하였습니다.