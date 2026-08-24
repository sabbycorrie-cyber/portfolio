import "./Services.css";

/* "What I Do", the capability page. No rates here: this version of
   the portfolio is the one used for job applications. */
function Services() {
    const areas = [
        {
            name: "React applications",
            summary:
                "Component architecture, routing, state and API calls, with a database behind it when the project needs one. Built with React and Vite, deployed and maintained.",
            includes: [
                "Component-based architecture",
                "Client-side routing and state with hooks",
                "REST API integration",
                "Deployment, environment config and handover",
            ],
            cardClass: "svc-gold",
            featured: true,
        },
        {
            name: "Data and back-end integration",
            summary:
                "The layer most front-end portfolios stop short of. Designing the tables, writing the access policies, and wiring live data into the interface.",
            includes: [
                "Supabase and PostgreSQL",
                "Row Level Security policies",
                "Realtime channels for live, multi-user features",
                "API keys restricted, quota-capped and kept out of the repo",
            ],
            cardClass: "svc-teal",
        },
        {
            name: "Hand-coded front ends",
            summary:
                "Landing pages and marketing sites written in HTML, CSS and JavaScript. No template, no builder weight, responsive down to small phones.",
            includes: [
                "Semantic HTML and modern CSS",
                "Sass for anything larger than a single page",
                "Flexbox and Grid layouts, responsive to 320px",
                "Deployed to Vercel or Netlify",
            ],
            cardClass: "svc-green",
        },
        {
            name: "Debugging and repairs",
            summary:
                "Layout that breaks on mobile, a form that stopped submitting, a component that renders twice. Finding the actual cause rather than patching over it.",
            includes: [
                "Layout and responsiveness bugs",
                "Broken links, forms and buttons",
                "CSS and JavaScript fixes",
                "A written explanation of the cause",
            ],
            cardClass: "svc-purple",
        },
    ];

    return (
        <div className="services-page">
            <header className="services-hero">
                <p className="services-tag">What I do</p>

                <h1>Front-end development, end to end</h1>

                <p className="services-intro">
                    Certified in front-end development at Sundsgårdens
                    folkhögskola. I work across the whole path from layout to
                    live: the interface, the data behind it, and getting it
                    deployed and secured. The clearest example is{" "}
                    <a
                        href="https://guess246.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Guess246
                    </a>
                    , a React app running on Postgres with real-time
                    multiplayer, a third-party API and its own launch checklist.
                </p>
            </header>

            <section className="services-grid">
                {areas.map((item) => (
                    <article
                        key={item.name}
                        className={`service-card ${item.cardClass}`}
                    >
                        {item.featured && (
                            <span className="service-badge">Strongest</span>
                        )}

                        <h2>{item.name}</h2>

                        <p className="service-summary">{item.summary}</p>

                        <ul className="service-list">
                            {item.includes.map((line) => (
                                <li key={line}>{line}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </section>

            <section className="services-why">
                <h2>How I work</h2>

                <div className="why-grid">
                    <div className="why-item">
                        <h3>I vibe code, and I read what comes out</h3>
                        <p>
                            AI tooling is how I move fast. Reviewing, testing
                            and understanding every line before it ships is how
                            I keep it honest. I can walk through any decision in
                            my codebase and say why it's there.
                        </p>
                    </div>

                    <div className="why-item">
                        <h3>Shipped, not just built</h3>
                        <p>
                            Guess246 is live, installable and handling real
                            players: Row Level Security on the database,
                            restricted API keys, quota caps, analytics. I know
                            what finished actually means.
                        </p>
                    </div>

                    <div className="why-item">
                        <h3>I go past the front end when I need to</h3>
                        <p>
                            When a feature needed a database, real-time sync and
                            a security model, I learned them and built them
                            rather than cutting the feature.
                        </p>
                    </div>

                    <div className="why-item">
                        <h3>Comfortable owning a project</h3>
                        <p>
                            I've led work from concept through to launch,
                            including the parts that aren't code: scope,
                            sequencing, and deciding what ships first.
                        </p>
                    </div>
                </div>
            </section>

            <section className="services-process">
                <h2>How I approach a build</h2>

                <ol className="process-list">
                    <li>
                        <strong>Understand the goal.</strong> What it's for, who
                        uses it, and what has to be true on launch day.
                    </li>
                    <li>
                        <strong>Structure before styling.</strong> Components,
                        routes and data shape first, so the design has something
                        solid underneath it.
                    </li>
                    <li>
                        <strong>Build in reviewable pieces.</strong> Something
                        working early, then iterated, rather than one reveal at
                        the end.
                    </li>
                    <li>
                        <strong>Ship it properly.</strong> Deployed, secured,
                        tested on real devices, and documented enough for the
                        next person.
                    </li>
                </ol>
            </section>

            <section className="services-cta">
                <h2>Let's talk</h2>

                <a href="mailto:sabbycorrie@gmail.com" className="email-button">
                    Email Me
                </a>

                <p className="email-text">sabbycorrie@gmail.com</p>
            </section>
        </div>
    );
}

export default Services;
