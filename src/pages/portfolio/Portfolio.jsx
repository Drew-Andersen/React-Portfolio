import { projects } from "./Project";
import './portfolio.css'


export default function Portfolio() {
    return (
        <>
            <div className="m-3">
                <h1 className="text-center p-5">Portfolio</h1>
                <div className="project-section w-100">
                    {projects.map((project) => {
                        return (
                            <div className="project-cad" key={project.projectTitle}>
                                <div className="project-title">
                                    <h3>{project.projectTitle}</h3>
                                </div>
                                <div className="text-center">
                                    <img
                                        className="project-img"
                                        src={project.imageLink}
                                        alt={project.imageAtl}
                                    />
                                </div>
                                <div className="project-buffer">
                                    <p className="project-description">
                                        {project.description}
                                    </p>
                                    {project.techStack && (
                                        <div className="project-tech-tags">
                                            {project.techStack.map((tech) => (
                                                <span className="tech-tag" key={tech}>{tech}</span>
                                            ))}
                                        </div>
                                    )}
                                    <div className="project-links d-flex justify-content-center gap-2">
                                        {project.liveLink && (
                                            <a
                                                href={project.liveLink}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="project-btn"
                                            >
                                                Live Demo
                                            </a>
                                        )}
                                        <a
                                            href={project.gitHub}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="project-btn"
                                        >
                                            View Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}