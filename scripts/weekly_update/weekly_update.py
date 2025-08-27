from datetime import datetime, timedelta
from notion_client import Client
import logging
from logging.handlers import RotatingFileHandler
import os
from github import Github
from dotenv import load_dotenv

load_dotenv()

NOTION_DB_ID = os.getenv("NOTION_DB_ID")
NOTION_SECRET_TOKEN = os.getenv("NOTION_SECRET_TOKEN")
GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")
THIS_WEEK_HIGHLIGHTS_PAGE_ID = "1f4f199edf7c8081a514fdb557182565"
    

def get_current_week_range():
    """
    주 시작일과 종료일을 반환
    """
    today = datetime.today()
    start_of_week = today - timedelta(days=today.weekday())
    end_of_week = start_of_week + timedelta(days=6)
    return start_of_week.date(), end_of_week.date()

def make_md_for_notion(sec_5, sec_4, sec_3_2_1):
    """
    'This week's highlights'에 생성할 Notion 형식으로 정리
    """
    def txt(content: str):
        return [{"type": "text", "text": {"content": content}}]

    def heading(text: str, level=2):
        t = {2: "heading_2", 3: "heading_3"}.get(level, "heading_2")
        if level == 2:
            return {"object": "block", "type": t, t: {"rich_text": txt(text), "color": "green_background"}}
        else:
            return {"object": "block", "type": t, t: {"rich_text": txt(text)}}

    def paragraph(text: str):
        return {"object": "block", "type": "paragraph", "paragraph": {"rich_text": txt(text)}}
    
    def quote(text: str):
        return {"object": "block", "type": "quote", "quote": {"rich_text": txt(text)}}

    def heading_toggle(summary: str, children_blocks: list):
        return {
            "object": "block",
            "type": "heading_2",
            "heading_2": {
                "rich_text": txt(summary),
                "is_toggleable": True,
                "children": children_blocks
            }
        }

    def make_item_blocks(item, index=None):
        """item = {'title': str, 'ai_summary': str, 'why_it_matters': str, 'score': int}"""
        title_line = f"{index}. {item['title']}"
        blocks = [
            heading(title_line, 3),
            paragraph(f"{item['ai_summary']}"),
            quote(f"Why it matters:\n{item['why_it_matters']}")
        ]
        return blocks
    
    children = []

    if sec_5:
        children.append(heading("5점", level=2))
        for i, it in enumerate(sec_5, 1):
            children += make_item_blocks(it, i)

    if sec_4:
        children.append(heading("4점", level=2))
        for i, it in enumerate(sec_4, 1):
            children += make_item_blocks(it, i)

    # 3점 미만 → 토글로 접기
    if sec_3_2_1:
        # 3점 이하 항목을 토글로 묶어서 추가
        i = 1
        now_score = ""
        toggle_children = []
        for it in sec_3_2_1:
            if it["score"] != now_score:
                now_score = it["score"]
                i = 1
                toggle_children.append(heading(f"{now_score}점", level=2))
            toggle_children += make_item_blocks(it, i)
            i += 1
        children.append(heading_toggle("3점 이하", toggle_children))

    return children

def create_page(parent_page_id, children_blocks):
    """
    Notion에 페이지 생성
    """
    today_str = datetime.now().strftime("%m/%d")
    notion = Client(auth=NOTION_SECRET_TOKEN)
    new_page = notion.pages.create(
        parent={"page_id": parent_page_id},
        properties={
            "title": [
                {
                    "type": "text",
                    "text": {
                        "content": today_str
                    }
                }
            ]
        },
        children=children_blocks
    )
    return new_page

def make_md_for_github(sec_5, sec_4, sec_3_2_1):
    """
    github에 올릴 마크다운 형식으로 정리
    """
    def fmt_block(item, idx=None):
        # 일반 표시 블록
        title_line = f"### {idx}. {item['title']}"
        summary_line = f"{item['ai_summary'].strip()}"
        to_blockquote = "\n".join(["> " + line for line in item['why_it_matters'].strip().splitlines()])
        why_line = f"> **Why it matters:** \n{to_blockquote}"
        return f"{title_line}\n{summary_line}\n\n{why_line}\n"
    
    md_lines = []
    i = 1 
    now_score = ""
    for it in sec_5 + sec_4 + sec_3_2_1:
        if it["score"] != now_score:
            now_score = it["score"]
            i = 1
            md_lines.append(f"## {now_score}점\n")
        md_lines.append(fmt_block(it, i))
        i += 1
    
    return md_lines

def github_update(md_lines, start_date, end_date):
    OWNER = "springCoolers"
    MD_FILE_PATH = "_contents/digest/weeklynews/weeklynews.md"
    REPO = "llm-handbook"
    BRANCH = "main"           

    g = Github(GITHUB_TOKEN)
    repo = g.get_user(OWNER).get_repo(REPO)

    WEEKLY_NEWS_HEADER = f"## [{start_date.strftime('%Y/%m/%d')} ~ {end_date.strftime('%Y/%m/%d')}] 주간 소식\n"
    # repo에 해당 파일이 없을 경우 예외 처리
    file_content = repo.get_contents(MD_FILE_PATH, ref=BRANCH)
    new_contents = "\n".join(md_lines)
    current = file_content.decoded_content.decode("utf-8")
    intro_idx = current.find("##")
    intro = current[:intro_idx]
    update_content = intro + WEEKLY_NEWS_HEADER + new_contents + current[intro_idx:]

    commit_msg = f"Update weekly news digest: {datetime.now().strftime('%Y-%m-%d')}"
    repo.update_file(
        path=MD_FILE_PATH,
        message=commit_msg,
        content=update_content,
        sha=file_content.sha,
        branch=BRANCH
    )

def main(logger):
    start_date, end_date = get_current_week_range()
    notion = Client(auth=NOTION_SECRET_TOKEN)

    query_time = datetime.now()
    response = notion.databases.query(
        **{
            "database_id": NOTION_DB_ID,
            "filter": {
                "and": [
                    {
                        "property": "Created",
                        "date": {
                            "on_or_after": start_date.isoformat()
                        }
                    },
                    {
                        "property": "Created",
                        "date": {
                            "on_or_before": end_date.isoformat()
                        }
                    }
                ]
            },
            "sorts": [
                {
                    "property": "Score",
                    "direction": "ascending"
                }
            ]
        }
    )
    logger.info(f"Notion query time: {datetime.now() - query_time}")
    # 필요한 컬럼 추출 및 점수마다 분류
    sec_5, sec_4, sec_3_2_1 = [], [], []
    for item in response.get("results", []):
        properties = item["properties"]
        if not properties["Score"]["select"]: continue
        score = properties["Score"]["select"]["name"]
        title = properties["Name"]["title"][0]["plain_text"] if properties["Name"]["title"] else "제목 없음"
        ai_summary = "".join([txt["plain_text"] for txt in properties["AI summary"]["rich_text"]]) if properties["AI summary"]["rich_text"] else "요약 없음"
        why_it_matters = "".join([txt["plain_text"] for txt in properties["Why it matters"]["rich_text"]]) if properties["Why it matters"]["rich_text"] else "내용 없음"
        result_dict = {
            "title": title,
            "score": score,
            "ai_summary": ai_summary,
            "why_it_matters": why_it_matters
        }
        if score == "5":
            sec_5.append(result_dict)
        elif score == "4":
            sec_4.append(result_dict)
        elif score == "3" or score == "2" or score == "1":
            sec_3_2_1.append(result_dict)
    child_pages = make_md_for_notion(sec_5, sec_4, sec_3_2_1)
    create_page(THIS_WEEK_HIGHLIGHTS_PAGE_ID, child_pages)
    # github 업데이트
    md_lines = make_md_for_github(sec_5, sec_4, sec_3_2_1)
    github_update(md_lines, start_date, end_date)

if __name__ == "__main__":
    # formatter 설정
    formatter = logging.Formatter(fmt="%(asctime)s - %(levelname)s - %(message)s",datefmt='%Y%m%d %H:%M:%S')
    # logger 설정
    handler = RotatingFileHandler( f'./{os.path.basename(__file__).split(".")[0]}.log', maxBytes=1024 *1024 * 10, backupCount=60 , encoding='utf-8', mode="a")
    handler.setFormatter(formatter)
    logger = logging.getLogger("logger")
    logger.setLevel(logging.INFO)
    logger.addHandler(handler)
    
    try:
        main(logger)
    except Exception as e:
        logger.error(f"Error: {e}")
        raise e