import { Link } from "react-router-dom";
import "./Home.css";
import ProfilePic from "../assets/ProfilePic1.png";

function Home() {
    return (
        <div className="home-page">
            <div className="hero-section">
                <div className="hero-content">
                    <h1>Sabantho Corrie-Edghill</h1>

                    <h2>Front-End Developer &amp; Co-founder of Studio 246</h2>

                    <p>
                        A Barbadian and Guyanese Lokono-Arawak front-end
                        developer, an urban Indigenous woman in tech whose
                        experience navigating two worlds has shaped a creative,
                        adaptable and thoughtful approach to problem-solving.
                    </p>

                    <p>
                        I have a big passion for learning and a real fascination
                        with AI, and the toolset I am growing shows it. The
                        clearest example is{" "}
                        <a
                            href="https://studio246.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Guess246
                        </a>
                        , a React app with a Postgres backend, real-time
                        multiplayer and 120+ real locations across Barbados, now
                        heading to the app stores.
                    </p>

                    <div className="hero-actions">
                        <Link to="/project" className="hero-button">
                            See my work
                        </Link>

                        <Link to="/services" className="hero-button ghost">
                            What I do
                        </Link>
                    </div>

                    <section className="strengths">
                        <h2>What I Bring</h2>

                        <ul>
                            <li>
                                Front-end development with React and JavaScript
                            </li>
                            <li>
                                Certified in front-end development,
                                Sundsgårdens folkhögskola 2026
                            </li>
                            <li>
                                Apps taken all the way to production, not just
                                to a demo
                            </li>
                            <li>
                                Classic coding and vibe coding together, with
                                code I can explain and defend
                            </li>
                            <li>Project leadership and collaboration</li>
                            <li>
                                Adaptability and cross-cultural perspective
                            </li>
                        </ul>
                    </section>
                </div>

                <div className="hero-image">
                    <img src={ProfilePic} alt="Sabantho Corrie-Edghill" />
                </div>
            </div>
        </div>
    );
}

export default Home;
