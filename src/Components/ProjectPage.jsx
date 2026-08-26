import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Project.css";
import githubIcon from "../assets/github-svgrepo-com.svg";
import coverGuess246 from "../assets/covers/guess246.jpg";
import coverStudio246 from "../assets/covers/studio246.jpg";
import coverGuessGeo from "../assets/covers/guessgeo.jpg";

function ProjectPage() {
    const [search, setSearch] = useState("");
    const [showProject, setShowProject] = useState(true);

    const project = [
        {
            name: "Guess246",
            featured: true,
            cover: coverGuess246,
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
            cover: coverStudio246,
            role: "Co-founder",
            github: "",
            demo: "https://studio-246.vercel.app/",
            tech: "React, Vite, Vercel, responsive design",
            what: "The studio site for Studio 246, a Sweden-based studio I co-founded that builds culturally grounded apps and games with Barbadian roots. It introduces the studio, presents the work that is live, and acts as the front door for everything we release.",
            learned:
                "Positioning technical work for a non-technical audience: writing copy that lands in one read, structuring a page so a visitor understands the studio in seconds, and compressing imagery so the site stays quick on slower connections.",
            challenges:
                "Presenting a range of very different projects under one identity without the page turning into a list, and holding the layout together from phone to desktop.",
            cardClass: "teal-card",
        },
        {
            name: "GuessGeo",
            variant: "humble",
            cover: coverGuessGeo,
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
            variant: "abstract",
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
                React work from a first browser game through to a production app
                with a Postgres backend, real-time multiplayer and a live API.
                Search by name or technology.
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
                                className={`project-card ${project.cardClass} v-${project.variant || "engulfed"}`}
                            >
                                {!project.variant && (
                                    <>
                                        <img
                                            className="card-art"
                                            src={project.cover}
                                            alt={`${project.name} start screen`}
                                            loading="lazy"
                                        />
                                        <div className="card-scrim"></div>
                                        <div className="card-veil"></div>
                                    </>
                                )}

                                {project.featured && (
                                    <span className="project-badge">
                                        Flagship project
                                    </span>
                                )}

                                <div className="card-body">
                                    <h3>{project.name}</h3>

                                    {project.role && (
                                        <p className="role">{project.role}</p>
                                    )}

                                    <p className="tech">{project.tech}</p>

                                    <p className="card-what">{project.what}</p>

                                    <details className="card-more">
                                        <summary>The build story</summary>

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
                                    </details>

                                    {project.variant === "humble" && (
                                        <figure className="card-doodle">
                                            <img
                                                src={project.cover}
                                                alt={`${project.name} start screen`}
                                                loading="lazy"
                                            />
                                            <figcaption>
                                                Where it started
                                            </figcaption>
                                        </figure>
                                    )}

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
