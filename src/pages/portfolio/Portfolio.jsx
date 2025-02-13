import { projects } from "./Project";
// import { projects, projects2 } from "./Project";

import './portfolio.css';

export default function Portfolio() {
    return (
        <>
            <div className="m-3">
                <h1 className="text-center p-5">Portfolio</h1>
                <div className="project-section w-100">
                    {projects.map((project, index) => {
                        return (
                            <div id="projects" className={index} key={index}>
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
            </div>
        </>
    )
}