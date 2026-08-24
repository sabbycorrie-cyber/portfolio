import "./Popup.css";

function Popup({ project, closePopup }) {
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button onClick={closePopup}>X</button>

                <h2>{project.name}</h2>
                <img src={project.image} alt={project.name} />

                <div className="project-section">
                    <h3>Overview</h3>
                    <p>{project.overview}</p>
                </div>

                <div className="project-section">
                    <h3>Tech Stacks</h3>
                    <p>{project.tech}</p>
                </div>

                {project.role && (
                    <div className="project-section">
                        <h3>My Role</h3>
                        <p>{project.role}</p>
                    </div>
                )}

                {project.impact && (
                    <div className="project-section">
                        <h3>Impact</h3>
                        <p>{project.impact}</p>
                    </div>
                )}

                <div className="project-section">
                    <h3>Highlights</h3>
                    <ul>
                        {project.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                        ))}
                    </ul>
                </div>

                <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    >
                        View Code on GitHub
                    </a>

            </div>
        </div>
    );
}

export default Popup;