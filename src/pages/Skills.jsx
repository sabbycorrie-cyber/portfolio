import React from "react";
import "./Skills.css";

function Skills() {
    /* Each group is rendered the same way, so adding a skill later is
       a one-line change instead of another block of JSX. */
    const groups = [
        {
            title: "Front-End Development",
            note: "The core of what I build.",
            skills: [
                "React 19",
                "JavaScript (ES6+)",
                "HTML5",
                "CSS3",
                "Sass",
                "React Router",
                "Responsive Design",
                "Accessibility basics",
            ],
        },
        {
            title: "Back-End & Data",
            note: "Used in production on Guess246.",
            skills: [
                "Supabase",
                "PostgreSQL",
                "Row Level Security",
                "Realtime channels",
                "REST APIs",
                "Google Maps / Street View API",
            ],
        },
        {
            title: "Build, Ship & Performance",
            note: "Getting it live and keeping it fast.",
            skills: [
                "Vite",
                "PWA / Service Workers",
                "Vercel",
                "Environment & API-key security",
                "Analytics",
            ],
        },
        {
            title: "Tools & Workflow",
            note: "Day to day.",
            skills: [
                "Git",
                "GitHub",
                "VS Code",
                "Figma",
                "ESLint",
                "Agile workflow",
                "Vibe coding",
            ],
        },
    ];

    const ticker =
        "React • JavaScript • HTML5 • CSS3 • Sass • Supabase • PostgreSQL • " +
        "REST APIs • Vite • PWA • Git • GitHub • VS Code • Figma • ";

    return (
        <div className="skills-page">
            <div className="skills-card">
                <h1>Skills &amp; Technologies</h1>

                {/* Two copies of the same strip so the marquee loops
                    without a visible gap. */}
                <div className="code-track" aria-hidden="true">
                    <div className="code-strip">{ticker}</div>
                    <div className="code-strip">{ticker}</div>
                </div>

                <p className="skills-lead">
                    I started on the front end and kept going until the whole
                    thing shipped, which meant learning the database, the API
                    keys, the deploy and the security that sits behind a site
                    people actually use.
                </p>

                {groups.map((group) => (
                    <section key={group.title}>
                        <h2>{group.title}</h2>

                        <p className="skills-note">{group.note}</p>

                        <div className="skill-grid">
                            {group.skills.map((skill) => (
                                <div className="skill-pill" key={skill}>
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </section>
                ))}

                <section className="skills-honesty">
                    <h2>How I build: vibe coding</h2>

                    <p>
                        I vibe code. I work with AI tooling the same way I work
                        with any other tool in the stack: describing what I want,
                        moving fast through the repetitive parts, and thinking
                        out loud against something that answers back. It's how I
                        got from a class project to a live app with a database
                        behind it in a matter of months.
                    </p>

                    <p>
                        What ships is still code I've read, run and understood. I
                        decide the architecture, I debug it myself, and I own it
                        when it breaks. Guess246 has Row Level Security policies,
                        restricted API keys, quota caps and a written launch
                        checklist because I went looking for what could go wrong,
                        not because a prompt handed them to me.
                    </p>
                </section>

                <section className="skills-cert">
                    <h2>Certification</h2>

                    <div className="cert-card">
                        <h3>IT Programming: Front-End Development</h3>

                        <p className="cert-meta">
                            Sundsgårdens folkhögskola · January to June 2026
                        </p>

                        <p className="cert-body">
                            Course content: HTML5, CSS3, JavaScript, Figma,
                            modern design libraries, modern frameworks,
                            Git/GitHub, Visual Studio Code, programming
                            techniques and agile working.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Skills;
