import { projects } from "./Project";
import './portfolio.css';

export default function Portfolio() {
    return (
        <>
            <h1 className="text-center p-5">Portfolio</h1>
            <div className="project-section w-100">
                {projects.map((project, index) => {
                    return (
                        <div id={index} className="projects" key={index}>
                            <a href={project.liveLink} target="_blank">
                                <div className="project-buffer">
                                    <div className="project-title">
                                        <h3>{project.projectTitle}</h3>
                                    </div>
                                    <div className="text-center">
                                        <img className="project-img" src={project.imageLink} alt={project.imageAtl} />
                                    </div>
                                </div>
                            </a>
                        </div>
                    )
                })}
            </div>
        </>
    )
}