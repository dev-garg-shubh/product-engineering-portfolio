from pathlib import Path
import sys

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import KeepTogether, Paragraph, SimpleDocTemplate, Spacer


OUTPUT = Path(sys.argv[1] if len(sys.argv) > 1 else "public/Shubh_Garg_CV.pdf")
OUTPUT.parent.mkdir(parents=True, exist_ok=True)

INK = colors.HexColor("#10211B")
MUTED = colors.HexColor("#52635C")
ACCENT = colors.HexColor("#147D68")
LINE = colors.HexColor("#D9E1DC")

styles = getSampleStyleSheet()
name_style = ParagraphStyle(
    "Name",
    parent=styles["Title"],
    fontName="Helvetica-Bold",
    fontSize=23,
    leading=25,
    textColor=INK,
    spaceAfter=3,
    alignment=TA_LEFT,
)
role_style = ParagraphStyle(
    "Role",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=10,
    leading=12,
    textColor=ACCENT,
    spaceAfter=5,
)
contact_style = ParagraphStyle(
    "Contact",
    parent=styles["Normal"],
    fontSize=8.5,
    leading=11,
    textColor=MUTED,
    spaceAfter=10,
)
section_style = ParagraphStyle(
    "Section",
    parent=styles["Heading2"],
    fontName="Helvetica-Bold",
    fontSize=9,
    leading=11,
    textColor=ACCENT,
    borderColor=LINE,
    borderWidth=0,
    borderPadding=0,
    spaceBefore=7,
    spaceAfter=5,
)
heading_style = ParagraphStyle(
    "Heading",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=9.2,
    leading=11,
    textColor=INK,
    spaceAfter=1,
)
meta_style = ParagraphStyle(
    "Meta",
    parent=styles["Normal"],
    fontSize=7.8,
    leading=10,
    textColor=MUTED,
    spaceAfter=3,
)
body_style = ParagraphStyle(
    "Body",
    parent=styles["Normal"],
    fontSize=8.1,
    leading=10.7,
    textColor=INK,
    spaceAfter=3,
)
bullet_style = ParagraphStyle(
    "Bullet",
    parent=body_style,
    leftIndent=9,
    firstLineIndent=-6,
    bulletIndent=2,
    spaceAfter=2,
)


def section(title: str):
    return Paragraph(title.upper(), section_style)


def role(title: str, organization: str, period: str, bullets: list[str]):
    items = [
        Paragraph(title, heading_style),
        Paragraph(f"{organization}  |  {period}", meta_style),
    ]
    items.extend(Paragraph(f"- {item}", bullet_style) for item in bullets)
    return KeepTogether(items)


story = [
    Paragraph("Shubh Garg", name_style),
    Paragraph("Full-Stack Developer", role_style),
    Paragraph(
        "jan22.sg@gmail.com  |  linkedin.com/in/shubh-garg-22x1",
        contact_style,
    ),
    section("Profile"),
    Paragraph(
        "Full-stack developer building end-to-end product systems across React interfaces, backend services, "
        "data workflows, cloud delivery, and developer automation. I focus on understandable user experiences, "
        "reliable architecture, and practical ownership from ambiguous requirements through production delivery.",
        body_style,
    ),
    section("Selected independent work"),
    role(
        "Real-Time Options Intelligence and Replay Platform",
        "Independent product  |  Work in progress",
        "2026 - Present",
        [
            "Built a React, TypeScript, FastAPI, PostgreSQL, Redis, and WebSocket platform for live Indian index options analysis, point-in-time replay, backtesting, mock execution, journaling, and advisory decision support.",
            "Designed separate freshness paths for ticks and option-chain snapshots, reconnect and stale-feed handling, and replay safeguards that prevent future data from leaking into historical analysis.",
        ],
    ),
    Spacer(1, 2),
    role(
        "Cloud-Native Options Market Data Pipeline",
        "Independent production-grade project  |  Completed",
        "2026",
        [
            "Built a Python ingestion service for Dhan option-chain Greeks and futures prices with market-session gates, token renewal, retries, rate limits, dynamic instrument resolution, and idempotent PostgreSQL writes.",
            "Delivered with Docker, AWS ECS Fargate, RDS PostgreSQL, Secrets Manager, CloudWatch, GitHub Actions, migrations, health checks, and 32 automated tests guarding critical paths before deployment.",
        ],
    ),
    section("Experience"),
    role(
        "Freelance Full-Stack Developer",
        "Independent, Remote",
        "June 2026 - Present",
        [
            "Building product systems across interfaces, APIs, real-time data views, cloud delivery, and reliable user workflows.",
        ],
    ),
    Spacer(1, 2),
    role(
        "Member of Technical Staff - Full Stack",
        "Sprih Inc., Onsite",
        "June 2023 - May 2026",
        [
            "Joined the early engineering team and owned production features across sustainability dashboards, facility and user management, data workflows, reporting surfaces, and Java-backed API integrations.",
            "Architected SprihCharts, a reusable D3.js visualization foundation used across data-heavy product surfaces.",
            "Improved delivery through reusable React patterns, async workflow visibility, Playwright automation, AI-assisted E2E skills, Vite, and pnpm tooling.",
        ],
    ),
    Spacer(1, 2),
    role(
        "Software Developer Intern",
        "Sprih Inc., Onsite",
        "June 2022 - April 2023",
        [
            "Developed reusable responsive interfaces, integrated REST APIs, and contributed to dashboard and product workflows from design through implementation.",
        ],
    ),
    section("Education"),
    Paragraph("B.Tech in Computer Science", heading_style),
    Paragraph("Madhav Institute of Technology and Science, Gwalior  |  August 2019 - May 2023", meta_style),
    section("Technical skills"),
    Paragraph(
        "<b>Frontend:</b> React, TypeScript, Redux, Material UI, D3.js, Recharts, Tailwind CSS, responsive UI  "
        "<br/><b>Backend and data:</b> Java, Spring Boot, Node.js, Express, FastAPI, Python, PostgreSQL, Redis, Kafka, REST APIs, WebSockets  "
        "<br/><b>Cloud and delivery:</b> AWS ECS, RDS, Docker, GitHub Actions, Vite, pnpm  "
        "<br/><b>Quality and workflow:</b> Playwright, Cypress, Jest, AI-assisted development, Codex, Cursor, MCP, custom skills",
        body_style,
    ),
]


def footer(canvas, document):
    canvas.saveState()
    canvas.setStrokeColor(LINE)
    canvas.line(16 * mm, 12 * mm, 194 * mm, 12 * mm)
    canvas.setFillColor(MUTED)
    canvas.setFont("Helvetica", 7)
    canvas.drawString(16 * mm, 8 * mm, "Shubh Garg - Full-Stack Developer")
    canvas.drawRightString(194 * mm, 8 * mm, f"Page {document.page}")
    canvas.restoreState()


document = SimpleDocTemplate(
    str(OUTPUT),
    pagesize=A4,
    rightMargin=16 * mm,
    leftMargin=16 * mm,
    topMargin=14 * mm,
    bottomMargin=16 * mm,
    title="Shubh Garg - Full-Stack Developer",
    author="Shubh Garg",
    subject="Public portfolio CV",
)
document.build(story, onFirstPage=footer, onLaterPages=footer)
print(OUTPUT)
