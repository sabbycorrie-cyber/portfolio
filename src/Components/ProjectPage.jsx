import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Project.css";
import githubIcon from "../assets/github-svgrepo-com.svg";
import coverGuess246 from "../assets/covers/guess246.jpg";
import coverStudio246 from "../assets/covers/studio246.jpg";
import coverGuessGeo from "../assets/covers/guessgeo.jpg";
import coverIndigenous from "../assets/covers/indigenousconnect.jpg";
import coverRestaurant from "../assets/covers/restaurantswipe.jpg";
import coverTapir from "../assets/covers/tapirescape.jpg";

function ProjectPage() {
    const [search, setSearch] = useState("");
    const [showProject, setShowProject] = useState(true);

    const project = [
        {
            name: "Guess246",
            featured: true,
            cover: coverGuess246,
            role: "Co-founder & developer, Studio 246",
            github: "",
            appStore:
                "https://apps.apple.com/us/app/guess246/id6816416499",
            demo: "https://guess246.com/",
            demoLabel: "guess246.com",
            tech: "React 19, Vite, Supabase (Postgres, RLS, Realtime), Google Street View Static API, PWA",
            what: "De Ultimate Bajan Road Test, out now on iPhone with Android next. Players get seconds to name one of 122 real Barbados roads across all 11 parishes, and every right answer opens the researched, cited history underneath. Difficulty tiers, leaderboards, challenge links and live multiplayer.",
            statsTitle: "Launch week, App Store Top Paid Trivia",
            stats: [
                "#1 Barbados, every day since launch",
                "#2 Canada",
                "#7 UK",
                "#8 US, up from a #10 debut",
            ],
            statsNote: "Every rating so far: 5 stars.",
            story: [
                "I didn't learn the full story of Barbados in school. So we built a game that tells it.",
                "More than nine in ten Barbadians are of African descent. Yet the history most of us were taught came largely from one side: the planters, the sugar, the trade and where it was shipped. Slavery was covered briefly. The people who survived it, rebuilt after it, and built this island were left in the margins.",
                "As a Brown, Indigenous Barbadian woman, I know what it means to have your people's story told by someone else, or not told at all. Black, Brown and Indigenous peoples have carried some of the worst treatment this world has handed out. Our histories are connected, and all of them deserve to be lifted up, not left out.",
                "I felt that gap as a young person. It costs more than knowledge. It costs pride, self-knowledge, and a sense of who stood where we stand now.",
                "So we built Guess246. Black and Brown Barbadian history comes first, and every fact is researched and cited, drawing on my background in intercultural research. It's like moving through hidden archives in a ZR van, the way most of us cross the island every day.",
                "Fun is the hook. Knowing our story is the point. I hope Bajans play it, then go and stand on these streets themselves, knowing what happened there and what it cost the people who came before.",
                "We launched in the 60th year of Independence and our 5th as a Republic. Sixty and five. Built by two Barbadians at Studio 246.",
            ],
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
            demo: "https://studio246.app/",
            tech: "React, Vite, Vercel, responsive design",
            what: "The studio site for Studio 246, a Sweden-based studio I co-founded that builds culturally grounded apps and games with Barbadian roots. It introduces the studio, presents the work that is live, and acts as the front door for everything we release.",
            learned:
                "Positioning technical work for a non-technical audience: writing copy that lands in one read, structuring a page so a visitor understands the studio in seconds, and compressing imagery so the site stays quick on slower connections.",
            challenges:
                "Presenting a range of very different projects under one identity without the page turning into a list, and holding the layout together from phone to desktop.",
            cardClass: "teal-card",
        },
        {
            name: "Indigenous Connect",
            variant: "humble",
            cover: coverIndigenous,
            role: "Co-founder & lead developer, Studio 246",
            github: "",
            demo: "https://indigenousconnect.vercel.app/",
            tech: "React, JavaScript, Supabase, i18n (12 languages), responsive design",
            what: "A sovereign digital space for Indigenous Peoples worldwide: community, friendship and professional ties, grounded in culture, safety and UNDRIP. Supports 12 languages, with data kept sovereign in the EU.",
            learned:
                "Building for many cultures and languages at once: internationalisation across 12 languages, and designing for safety, moderation and data sovereignty from the start.",
            challenges:
                "Making one space feel welcoming and safe across very different communities, and keeping the data sovereign within the EU.",
            cardClass: "clay-card",
        },
        {
            name: "Restaurant Swipe",
            variant: "humble",
            cover: coverRestaurant,
            role: "Co-founder & lead developer, Studio 246",
            github: "",
            demo: "https://restaurantswipe.vercel.app/",
            tech: "React, JavaScript, Geolocation, responsive design",
            what: "Tinder for restaurants: swipe yes, no or maybe through real places near you, and when you match with a meal the number to book a table is one tap away.",
            learned:
                "A swipe interface running on real data: geolocation, card gestures, saved lists, and turning a match into a single tap to act.",
            challenges:
                "Making the swipe feel instant and natural on a phone, and pulling in nearby places cleanly.",
            cardClass: "coral-card",
        },
        {
            name: "Tapir Escape",
            variant: "humble",
            cover: coverTapir,
            role: "Co-founder & lead developer, Studio 246",
            github: "",
            demo: "https://tapir-escape.vercel.app/",
            tech: "React, JavaScript, HTML5 game, accessibility",
            what: "A browser-based conservation game for the classroom. Guide a young tapir through the real threats facing South America's largest land mammal, then finish on its IUCN status and the grassroots funds working to save it. No install, playable on touch and keyboard.",
            learned:
                "Building a game loop in the browser that teaches without lecturing, and keeping it playable on both touch and keyboard.",
            challenges:
                "Balancing the game and the lesson so it stays fun while the facts land, and running the whole thing with nothing to download.",
            cardClass: "blue-card",
        },
        {
            name: "GuessGeo",
            variant: "humble",
            cover: coverGuessGeo,
            caption: "Where it started",
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
                React work from a first browser game through to a charting App
                Store release with a Postgres backend, real-time multiplayer
                and a live API. Search by name or technology.
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
                                        Out now on the App Store
                                    </span>
                                )}

                                <div className="card-body">
                                    <h3>{project.name}</h3>

                                    {project.role && (
                                        <p className="role">{project.role}</p>
                                    )}

                                    <p className="tech">{project.tech}</p>

                                    <p className="card-what">{project.what}</p>

                                    {project.stats && (
                                        <div className="card-stats">
                                            {project.statsTitle && (
                                                <p className="stats-title">
                                                    {project.statsTitle}
                                                </p>
                                            )}
                                            <ul>
                                                {project.stats.map((stat) => (
                                                    <li key={stat}>{stat}</li>
                                                ))}
                                            </ul>
                                            {project.statsNote && (
                                                <p className="stats-note">
                                                    {project.statsNote}
                                                </p>
                                            )}
                                        </div>
                                    )}

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

                                    {project.story && (
                                        <details className="card-more card-story">
                                            <summary>
                                                Why we built it
                                            </summary>

                                            {project.story.map((para) => (
                                                <p key={para}>{para}</p>
                                            ))}
                                        </details>
                                    )}

                                    {project.variant === "humble" && (
                                        <figure className="card-doodle">
                                            <img
                                                src={project.cover}
                                                alt={project.name}
                                                loading="lazy"
                                            />
                                            {project.caption && (
                                                <figcaption>
                                                    {project.caption}
                                                </figcaption>
                                            )}
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

                                    {project.appStore && (
                                        <a
                                            href={project.appStore}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="demo-link store-link"
                                        >
                                            App Store
                                        </a>
                                    )}

                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="demo-link"
                                        >
                                            {project.demoLabel || "Live Demo"}
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
