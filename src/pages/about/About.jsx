import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from './AnimatedProgressBarProvider';
import 'react-circular-progressbar/dist/styles.css';
import img from './images/Profile-img.jpeg';
import logo from './images/Logo.png';
import './about.css';

export default function About() {


    return (
        <>
            <div className='text-center logo'>
                <img src={logo} alt="Logo for portfolio" />
            </div>
            <section className='about-section my-5'>
                <div className="about-header px-2 text-center">
                    <h2>About Me</h2>
                </div>
                <div className="about-div my-4 mx-auto w-75">
                    <div className='text-center'>
                        <img src={img} className="profile-img rounded-circle mx-5" alt="profile image" />
                    </div>
                    <p className="m-4">
                    Hello! I’m a full stack developer dedicated to creating user-friendly applications that enhance the digital experience. My journey began at Georgia Southern University, 
                    where I earned a BS in Biology with a minor in Chemistry, initially aiming for a career in veterinary medicine. However, my path took an unexpected turn when I discovered 
                    my passion for fitness and health, leading me to work as a personal trainer and eventually in health promotion at a local hospital.
                    <br /><br />
                    After two rewarding years in wellness, I transitioned to logistics while continuing my personal training on the side. During my time in Savannah, GA, I developed a keen 
                    interest in technology and coding. This passion drove me to earn certifications from FreeCodeCamp, which ignited my desire to pursue web and software development 
                    full-time. I later completed a Full Stack Developer Certification at UCF's Coding Bootcamp, where I honed my skills in both front-end and back-end development.
                    <br /><br />
                    In addition to my tech pursuits, I am an avid fitness enthusiast and have competed in strongman, bodybuilding, and CrossFit events. I look forward to competing again 
                    in the future!
                    <br /><br />
                    I am eager to connect with mentors, tech enthusiasts, and anyone who shares a passion for full stack development. If you’re interested in collaborating or simply want 
                    to chat about technology and fitness, please fill out the contact form. Let’s connect and inspire each other!
                    </p>
                </div>
            </section>
            <section className='technologies-section my-5'>
                <div className="technologies-header text-center">
                    <h2>Technologies</h2>
                </div>
                <div className="container technologies-container mb-5">
                    <div className='row progress-bar'>
                        <div className="col-md-12 d-flex flex-wrap justify-content-between">
                            <div className="col-md-4 react-div">
                                <div className='icon'>
                                    <AnimatedProgressProvider
                                        id='progress'
                                        className='d-flex justify-content-center align-items-center border p-5'
                                        valueStart={0}
                                        valueEnd={85}
                                        duration={1.8}
                                        easingFunction={easeQuadInOut}
                                    >
                                        {(value) => {
                                            return (
                                                <CircularProgressbarWithChildren
                                                    className='CircularProgressbarWithChildren'
                                                    value={value}
                                                    styles={buildStyles({ pathTransition: "none" })}
                                                >
                                                    <div className="inner">
                                                        <i className="fa-brands fa-react"></i>
                                                    </div>
                                                </CircularProgressbarWithChildren>
                                            );
                                        }}
                                    </AnimatedProgressProvider>
                                </div>
                                <h5 className='mb-3 mt-3'>REACT</h5>
                            </div>
                            <div className="col-md-4 node-div">
                                <div className="icon">
                                    <AnimatedProgressProvider
                                        id='progress'
                                        className='d-flex justify-content-center align-items-center border p-5'
                                        valueStart={0}
                                        valueEnd={70}
                                        duration={1.8}
                                        easingFunction={easeQuadInOut}
                                    >
                                        {(value) => {
                                            return (
                                                <CircularProgressbarWithChildren
                                                    className='CircularProgressbarWithChildren'
                                                    value={value}
                                                    styles={buildStyles({ pathTransition: "none" })}
                                                >
                                                    <div className="inner">
                                                        <i className="fa-brands fa-node"></i>
                                                    </div>
                                                </CircularProgressbarWithChildren>
                                            );
                                        }}
                                    </AnimatedProgressProvider>
                                </div>
                                <h5 className='mb-3 mt-3'>Node.js</h5>
                            </div>
                            <div className="col-md-4 JS-div">
                                <div className='icon'>
                                    <AnimatedProgressProvider
                                        id='progress'
                                        className='d-flex justify-content-center align-items-center border p-5'
                                        valueStart={0}
                                        valueEnd={90}
                                        duration={1.8}
                                        easingFunction={easeQuadInOut}
                                    >
                                        {(value) => {
                                            return (
                                                <CircularProgressbarWithChildren
                                                    className='CircularProgressbarWithChildren'
                                                    value={value}
                                                    styles={buildStyles({ pathTransition: "none" })}
                                                >
                                                    <div className="inner">
                                                        <i className="fa-brands fa-js"></i>
                                                    </div>
                                                </CircularProgressbarWithChildren>
                                            );
                                        }}
                                    </AnimatedProgressProvider>
                                </div>
                                <h5 className='mb-3'>JavaScript</h5>
                            </div>
                            <div className="col-md-4 html-div">
                                <div className='icon'>
                                    <AnimatedProgressProvider
                                        id='progress'
                                        className='d-flex justify-content-center align-items-center border p-5'
                                        valueStart={0}
                                        valueEnd={94}
                                        duration={1.8}
                                        easingFunction={easeQuadInOut}
                                    >
                                        {(value) => {
                                            return (
                                                <CircularProgressbarWithChildren
                                                    className='CircularProgressbarWithChildren'
                                                    value={value}
                                                    styles={buildStyles({ pathTransition: "none" })}
                                                >
                                                    <div className="inner">
                                                        <i className="fa-brands fa-html5"></i>
                                                    </div>
                                                </CircularProgressbarWithChildren>
                                            );
                                        }}
                                    </AnimatedProgressProvider>
                                </div>
                                <h5 className='mb-3'>HTML</h5>
                            </div>
                            <div className="col-md-4 css-div">
                                <div className='icon'>
                                <AnimatedProgressProvider
                                    id='progress'
                                    className='d-flex justify-content-center align-items-center border p-5'
                                    valueStart={0}
                                    valueEnd={85}
                                    duration={1.8}
                                    easingFunction={easeQuadInOut}
                                >
                                    {(value) => {
                                        return (
                                            <CircularProgressbarWithChildren
                                                className='CircularProgressbarWithChildren'
                                                value={value}
                                                styles={buildStyles({ pathTransition: "none" })}
                                            >
                                                <div className="inner">
                                                    <i className="fa-brands fa-css3-alt"></i>
                                                </div>
                                            </CircularProgressbarWithChildren>
                                        );
                                    }}
                                </AnimatedProgressProvider>
                                </div>
                                <h5 className='mb-3'>CSS</h5>
                            </div>
                            <div className="col-md-4 sql-div">
                                <div className='icon'>
                                <AnimatedProgressProvider
                                    id='progress'
                                    className='d-flex justify-content-center align-items-center border p-5'
                                    valueStart={0}
                                    valueEnd={60}
                                    duration={1.8}
                                    easingFunction={easeQuadInOut}
                                >
                                    {(value) => {
                                        return (
                                            <CircularProgressbarWithChildren
                                                className='CircularProgressbarWithChildren'
                                                value={value}
                                                styles={buildStyles({ pathTransition: "none" })}
                                            >
                                                <div className="inner">
                                                    <i className="fa-solid fa-database"></i>
                                                </div>
                                            </CircularProgressbarWithChildren>
                                        );
                                    }}
                                </AnimatedProgressProvider>
                                </div>
                                <h5 className='mb-3'>
                                    NoSQL + <br />
                                    PostgreSQL</h5>
                            </div>
                            {/* Java and Python under this comment */}
                            <div className="col-md-6">
                                <div className="icon">
                                <AnimatedProgressProvider
                                        id='progress'
                                        className='d-flex justify-content-center align-items-center border p-5'
                                        valueStart={0}
                                        valueEnd={50}
                                        duration={1.8}
                                        easingFunction={easeQuadInOut}
                                    >
                                        {(value) => {
                                            return (
                                                <CircularProgressbarWithChildren
                                                    className='CircularProgressbarWithChildren'
                                                    value={value}
                                                    styles={buildStyles({ pathTransition: "none" })}
                                                >
                                                    <div className="inner">
                                                        <i className="fa-brands fa-java"></i>
                                                    </div>
                                                </CircularProgressbarWithChildren>
                                            );
                                        }}
                                    </AnimatedProgressProvider>
                                </div>
                                <h5 className='mb-3 mt-3'>Java</h5>
                            </div>

                            <div className="col-md-6">
                                <div className="icon">
                                <AnimatedProgressProvider
                                        id='progress'
                                        className='d-flex justify-content-center align-items-center border p-5'
                                        valueStart={0}
                                        valueEnd={30}
                                        duration={1.8}
                                        easingFunction={easeQuadInOut}
                                    >
                                        {(value) => {
                                            return (
                                                <CircularProgressbarWithChildren
                                                    className='CircularProgressbarWithChildren'
                                                    value={value}
                                                    styles={buildStyles({ pathTransition: "none" })}
                                                >
                                                    <div className="inner">
                                                    <i className="fa-brands fa-python"></i>
                                                    </div>
                                                </CircularProgressbarWithChildren>
                                            );
                                        }}
                                    </AnimatedProgressProvider>
                                </div>
                                <h5 className='mb-3 mt-3'>Python</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}