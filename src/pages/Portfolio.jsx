import { useNavigate } from "react-router-dom";
import "./Portfolio.css";

function Portfolio() {
    const navigate = useNavigate();

    return (
        <div className="portfolio-page">
            <div className="portfolio-hero">
                <p className="portfolio-tag">Front-end · React · Supabase</p>

                <h1>Featured Projects</h1>

                <p className="portfolio-description">
                    From a first browser game to a live React app running on
                    Postgres with real-time multiplayer. Work that shows
                    both the design side and the engineering behind it.
                </p>

                <div className="portfolio-actions">
                    <button
                        className="project-btn"
                        onClick={() => navigate("/project")}
                    >
                        View My Projects
                    </button>

                    <button
                        className="project-btn secondary"
                        onClick={() => navigate("/services")}
                    >
                        What I Do
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
