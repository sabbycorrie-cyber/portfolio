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
                    Trained on the front end, then kept going until the whole
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
                    <h2>How I build: classic coding and vibe coding</h2>

                    <p>
                        I do both, and the blend is deliberate. The foundation is
                        trained: a front-end certification, a long run of
                        coursework and assignments, and my own projects written
                        by hand. That is what lets me set the structure of a
                        build myself, choose the architecture, and know what a
                        piece of code is doing before it runs.
                    </p>

                    <p>
                        From there I finish through vibe coding. I work in
                        languages I already know, so I read what comes back and
                        judge it rather than trust it. I catch what is wrong,
                        keep what is right, and own the result. Guess246 has Row
                        Level Security policies, restricted API keys, quota caps
                        and a written launch checklist because I knew to go
                        looking for what could go wrong.
                    </p>

                    <p>
                        AI is not going away, and I would rather build with it
                        than around it. Classic coding supplies the judgement,
                        AI supplies the speed, and together they produce work
                        that is stronger, quicker to make and easier to change
                        than either approach on its own. That is modern
                        development, and it is how I intend to keep working.
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
