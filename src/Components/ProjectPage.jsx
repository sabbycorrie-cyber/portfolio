import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Project.css";
import githubIcon from "../assets/github-svgrepo-com.svg";

function ProjectPage() {
    const [search, setSearch] = useState("");
    const [showProject, setShowProject] = useState(true);

    const project = [
        {
            name: "Guess246",
            featured: true,
            role: "Co-founder & developer, Studio 246",
            github: "https://github.com/sabbycorrie-cyber/guessbarbados",
            demo: "https://guess246.vercel.app/",
            tech: "React 19, Vite, Supabase (Postgres, RLS, Realtime), Google Street View Static API, PWA",
            what: "A geography game built on 120+ real Barbadian locations across all 11 parishes. Players are dropped into a Street View photo and have to name the road and parish before the clock runs out. Three difficulty tiers, scoring with time and streak bonuses, per-difficulty leaderboards, shareable challenge links, pass-and-play, and live multiplayer rooms.",
            learned:
                "How to take an app all the way to production rather than just to 'it runs on my machine': designing a Postgres schema, locking it down with Row Level Security, syncing players in real time over Supabase Realtime channels, validating Street View imagery through the metadata endpoint so players never hit a grey tile, and shipping it as an installable PWA with an offline app shell.",
            challenges:
                "Keeping a live room in sync across devices, protecting an API key that has to ship in the browser bundle (referrer restrictions plus a hard daily quota cap), and staying inside Google's Street View terms: live imagery only, attribution never cropped.",
            cardClass: "gold-card",
        },
        {
            name: "Studio 246",
            role: "Co-founder",
            github: "",
            demo: "https://studio-246.vercel.app/",
            tech: "React, Vite, Vercel, responsive design",
            what: "The studio site for Studio 246, a Barbadian studio I co-founded that builds culturally grounded apps and games. It introduces the studio, presents the work that is live, and acts as the front door for everything we release.",
            learned:
                "Positioning technical work for a non-technical audience: writing copy that lands in one read, structuring a page so a visitor understands the studio in seconds, and compressing imagery so the site stays quick on slower connections.",
            challenges:
                "Presenting a range of very different projects under one identity without the page turning into a list, and holding the layout together from phone to desktop.",
            cardClass: "teal-card",
        },
        {
            name: "GuessGeo",
            github: "https://github.com/sabbycorrie-cyber/guessgeo",
            demo: "https://guessgeo-woad.vercel.app/",
            tech: "React, JavaScript, Google Street View API, HTML, CSS",
            what: "The first version of the guessing-game idea: a geography game where players identify locations from Street View clues and earn points for accurate guesses.",
            learned:
                "How to manage application state, handle user interactions, work with a third-party API, and structure a larger React application. It became the prototype Guess246 was rebuilt from.",
            challenges:
                "Balancing game logic, managing score updates, and keeping the experience smooth across different screen sizes.",
            cardClass: "green-card",
        },
        {
            name: "React Portfolio",
            github: "https://github.com/sabbycorrie-cyber/Portfolio-R1",
            demo: "",
            tech: "React 19, React Router, Vite, CSS",
            what: "This site, a responsive multi-page portfolio built to showcase projects, technical skills and how I work, through a component-based React interface.",
            learned:
                "Component architecture, state with React hooks, client-side routing, reusable UI patterns, and front-end design decisions made without a design handed to me.",
            challenges:
                "Balancing functionality with design consistency, building navigation and project filtering, and keeping the component structure scalable as the portfolio grew.",
            cardClass: "purple-card",
        },
        {
            name: "Genesis Design",
            github: "https://github.com/sabbycorrie-cyber/genesis-design/tree/main",
            demo: "",
            tech: "HTML, CSS, Sass, Flexbox, CSS Grid",
            what: "A multi-page responsive website with navigation, a gallery and a contact form, built to match a supplied layout and hold up across browsers.",
            learned:
                "How to structure a full website across multiple pages, use Sass to organise and reuse styles, and apply Flexbox and Grid to build layouts that respond properly.",
            challenges:
                "Keeping the layout consistent between pages and improving responsiveness while working across a lot of separate files.",
            cardClass: "blue-card",
        },
    ];

    const filteredProject = project.filter(
        (item) =>
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.tech.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="page">
            <h1>My Projects</h1>

            <button
                className="project-btn"
                onClick={() => setShowProject(!showProject)}
            >
                {showProject ? "Hide Projects" : "View My Projects"}
            </button>

            <p className="portfolio-description">
                Front-end work from a static Sass site through to a production
                React app with a Postgres backend, real-time multiplayer and a
                live API. Search by name or technology.
            </p>

            <div
                className="project-scroll-hint"
                onClick={() =>
                    window.scrollBy({
                        top: 600,
                        behavior: "smooth",
                    })
                }
            >
                <div className="scroll-wheel"></div>
            </div>

            {showProject && (
                <>
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search projects..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <div className="project-grid">
                        {filteredProject.map((project) => (
                            <div
                                key={project.name}
                                className={`project-card ${project.cardClass}`}
                            >
                                {project.featured && (
                                    <span className="project-badge">
                                        Flagship project
                                    </span>
                                )}

                                <h3>{project.name}</h3>

                                {project.role && (
                                    <p className="role">{project.role}</p>
                                )}

                                <p className="tech">{project.tech}</p>

                                <p>
                                    <strong>What it does:</strong>
                                    <br />
                                    {project.what}
                                </p>

                                <p>
                                    <strong>What I learned:</strong>
                                    <br />
                                    {project.learned}
                                </p>

                                <p>
                                    <strong>Challenges:</strong>
                                    <br />
                                    {project.challenges}
                                </p>

                                <div className="project-links">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="github-link"
                                            aria-label={`${project.name} source code on GitHub`}
                                        >
                                            <img
                                                src={githubIcon}
                                                alt=""
                                                className="github-icon"
                                            />
                                        </a>
                                    )}

                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="demo-link"
                                        >
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredProject.length === 0 && (
                        <p className="no-results">
                            No projects match “{search}”.
                        </p>
                    )}
                </>
            )}

            <div className="contact-footer">
                <h2>Let's Connect</h2>

                <p className="footer-line">
                    Open to front-end roles and freelance projects.{" "}
                    <Link to="/services" className="footer-link">
                        See what I do
                    </Link>
                </p>

                <a href="mailto:sabbycorrie@gmail.com" className="email-button">
                    Email Me
                </a>

                <p className="email-text">sabbycorrie@gmail.com</p>
            </div>
        </div>
    );
}

export default ProjectPage;
