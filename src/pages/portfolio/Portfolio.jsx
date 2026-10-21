import { projects } from "./Project";
import './portfolio.css';
 
function ProjectCard({ project, featured = false }) {
    return (
        <div className={featured ? 'project-card featured' : 'project-card'}>
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
    );
}
 
export default function Portfolio() {
    const featuredProjects = projects.filter((project) => project.featured);
    const otherProjects = projects.filter((project) => !project.featured);
 
    return (
        <>
            <div className="m-3">
                <h1 className="text-center p-5">Portfolio</h1>
 
                {featuredProjects.length > 0 && (
                    <section className="project-group">
                        <h2 className="project-group-title text-center">Featured projects</h2>
                        <div className="project-section">
                            {featuredProjects.map((project) => (
                                <ProjectCard key={project.projectTitle} project={project} featured />
                            ))}
                        </div>
                    </section>
                )}
 
                {otherProjects.length > 0 && (
                    <section className="project-group">
                        <h2 className="project-group-title text-center">More projects</h2>
                        <div className="project-section">
                            {otherProjects.map((project) => (
                                <ProjectCard key={project.projectTitle} project={project} />
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </>
    );
}
 