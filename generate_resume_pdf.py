import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle

def generate_pdf():
    pdf_path = os.path.join("public", "resume.pdf")
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        rightMargin=40,
        leftMargin=40,
        topMargin=36,
        bottomMargin=36
    )

    styles = getSampleStyleSheet()
    
    # Custom styles
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Heading1'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=24,
        textColor=colors.HexColor('#0f172a'),
        spaceAfter=4
    )

    subtitle_style = ParagraphStyle(
        'DocSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=10,
        leading=14,
        textColor=colors.HexColor('#475569'),
        spaceAfter=12
    )

    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Heading2'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=16,
        textColor=colors.HexColor('#4338ca'),
        spaceBefore=10,
        spaceAfter=4
    )

    body_style = ParagraphStyle(
        'DocBody',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13.5,
        textColor=colors.HexColor('#1e293b')
    )

    bold_body = ParagraphStyle(
        'BoldBody',
        parent=body_style,
        fontName='Helvetica-Bold'
    )

    bullet_style = ParagraphStyle(
        'BulletStyle',
        parent=body_style,
        leftIndent=14,
        spaceAfter=3
    )

    story = []

    # Header
    story.append(Paragraph("S. LOHITH CHAITANYA VARMA", title_style))
    contact_line = "Bellary, Karnataka, India &nbsp;|&nbsp; chaitanya.aiml.rymec@gmail.com &nbsp;|&nbsp; B.E. AI & ML (2027)"
    story.append(Paragraph(contact_line, subtitle_style))
    story.append(HRFlowable(width="100%", thickness=1.5, color=colors.HexColor('#6366f1'), spaceAfter=10))

    # Education
    story.append(Paragraph("EDUCATION", section_heading))
    edu_table_data = [
        [
            Paragraph("<b>B.E. in Artificial Intelligence and Machine Learning</b><br/>Rao Bahadur Y Mahabaleswarappa Engineering College (RYMEC), Bellary", body_style),
            Paragraph("<b>2023 — 2027</b><br/>Current CGPA: <b>7.14 / 10.0</b>", ParagraphStyle('RightText', parent=body_style, alignment=2))
        ]
    ]
    t = Table(edu_table_data, colWidths=[380, 150])
    t.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t)
    story.append(Spacer(1, 8))

    # Technical Skills
    story.append(Paragraph("TECHNICAL SKILLS", section_heading))
    skills_text = """
    <b>Programming Languages:</b> Python, JavaScript, SQL, HTML, CSS<br/>
    <b>Frameworks & Web:</b> React, FastAPI, Computer Vision, Groq API<br/>
    <b>Developer Tools:</b> Git, GitHub, VS Code<br/>
    <b>Core CS Fundamentals:</b> Object-Oriented Programming (OOP), Data Structures & Algorithms (DSA)
    """
    story.append(Paragraph(skills_text, body_style))
    story.append(Spacer(1, 8))

    # Projects
    story.append(Paragraph("PROJECTS", section_heading))
    
    # Project 1
    p1_header = [
        [
            Paragraph("<b>Golden Ratio Face Analyzer</b> | <i>HTML, CSS, JavaScript, React, Computer Vision</i>", body_style),
            Paragraph("<b>Implemented</b>", ParagraphStyle('P1Status', parent=body_style, alignment=2, textColor=colors.HexColor('#059669')))
        ]
    ]
    t_p1 = Table(p1_header, colWidths=[420, 110])
    t_p1.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP')]))
    story.append(t_p1)
    story.append(Paragraph("• Developed a web application for analyzing facial proportions using classical golden-ratio (Phi 1.618) measurements.", bullet_style))
    story.append(Paragraph("• Detected facial landmark coordinates to calculate Euclidean distances between ocular, nasal, and jawline landmarks.", bullet_style))
    story.append(Paragraph("• Visualized analysis results through dynamic canvas and SVG geometric overlays with harmony scoring metrics.", bullet_style))
    story.append(Spacer(1, 6))

    # Project 2
    p2_header = [
        [
            Paragraph("<b>AIVA — AI Virtual Assistant</b> | <i>React, JavaScript, Python, FastAPI, Groq API</i>", body_style),
            Paragraph("<b>Implemented</b>", ParagraphStyle('P2Status', parent=body_style, alignment=2, textColor=colors.HexColor('#059669')))
        ]
    ]
    t_p2 = Table(p2_header, colWidths=[420, 110])
    t_p2.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP')]))
    story.append(t_p2)
    story.append(Paragraph("• Built an AI-powered platform for aptitude testing, coding practice, mock interviews, and personalized interview preparation.", bullet_style))
    story.append(Paragraph("• Integrated Groq API for ultra-low-latency LLM inference to simulate realistic conversational interview interactions.", bullet_style))
    story.append(Paragraph("• Engineered an asynchronous FastAPI backend to manage user test sessions, prompt pipelines, and diagnostic evaluations.", bullet_style))
    story.append(Paragraph("• Designed responsive React frontend featuring code editor workspace, aptitude tests, and real-time performance feedback.", bullet_style))
    story.append(Spacer(1, 8))

    # Relevant Coursework & Focus
    story.append(Paragraph("CORE COURSEWORK & ACADEMIC INTERESTS", section_heading))
    coursework = "Data Structures & Algorithms, Object-Oriented Design, Artificial Intelligence, Machine Learning Algorithms, Database Systems, Computer Vision Principles."
    story.append(Paragraph(coursework, body_style))

    doc.build(story)
    print("PDF generated successfully at public/resume.pdf")

if __name__ == "__main__":
    generate_pdf()
