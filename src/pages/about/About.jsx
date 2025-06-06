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
                        Hello! I’m a Full Stack Developer passionate about building user-friendly applications that enhance the digital experience.
                        <br /><br />
                        My journey started with a BS in Biology from Georgia Southern University, initially pursuing veterinary medicine. However, my passion 
                        for fitness and health led me to work as a personal trainer and later in health promotion at a hospital. After two years in wellness 
                        and a transition into logistics, I discovered my love for coding.
                        <br /><br />
                        Earning certifications from FreeCodeCamp sparked my deep dive into tech, culminating in a Full Stack Developer Certification from The University of Central Florida&aposs 
                        Coding Bootcamp. Now, I specialize in front-end and back-end development, crafting seamless web experiences.
                        <br /><br />
                        Outside of tech, I’m a dedicated fitness enthusiast, having competed in strongman, bodybuilding, and CrossFit, with plans to compete again!
                        <br /><br />
                        I’m always eager to connect with fellow developers, mentors, and tech enthusiasts. Let’s collaborate, learn, and grow together—feel 
                        free to reach out!
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
                            {/* React */}
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
                            {/* Node */}
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
                            {/* JavaScript */}
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
                            {/* HTML & CSS */}
                            <div className="col-md-4 html-div">
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
                                                        <i className="fa-brands fa-html5"></i> <i className="fa-brands fa-css3-alt"></i>
                                                    </div>
                                                </CircularProgressbarWithChildren>
                                            );
                                        }}
                                    </AnimatedProgressProvider>
                                </div>
                                <h5 className='mb-3'>HTML & CSS</h5>
                            </div>
                            {/* Databases */}
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
                            {/* Java */} {/* change the col-md-6 to col-md-4 when displaying AWS div */}
                            {/* <div className="col-md-4 java-div">
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
                            </div> */}
                            {/* Python */}
                            <div className="col-md-4 python-div">
                                <div className="icon">
                                    <AnimatedProgressProvider
                                        id='progress'
                                        className='d-flex justify-content-center align-items-center border p-5'
                                        valueStart={0}
                                        valueEnd={65}
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
                            {/* AWS */} {/* Remove class d-none */}
                            <div className="d-none col-md-4 aws-div">
                                <div className="icon">
                                    <AnimatedProgressProvider
                                        id='progress'
                                        className='d-flex justify-content-center align-items-center border p-5'
                                        valueStart={0}
                                        valueEnd={75}
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
                                                        <i className="fa-brands fa-aws"></i>
                                                    </div>
                                                </CircularProgressbarWithChildren>
                                            );
                                        }}
                                    </AnimatedProgressProvider>
                                </div>
                                <h5 className='mb-3 mt-3'>Amazon Web Services</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="github-stats my-5">
                <div className="github-stats-header text-center">
                    <h2>GitHub Stats</h2>
                </div>
                <div className="container github-stats-container mb-5 px-0">
                    <img 
                        src="https://github-readme-stats.vercel.app/api?username=drew-andersen&theme=vue-dark&show_icons=true&hide_border=true&count_private=true" 
                        alt="Drew AndersenGitHub Stats" 
                        className='stats'
                    />
                    <img 
                        src="https://github-readme-streak-stats.herokuapp.com/?user=drew-andersen&theme=vue-dark&hide_border=true" 
                        alt="Drew AndersenGitHub Stats" 
                        className='stats'
                    />
                    <img 
                        src="https://github-readme-stats.vercel.app/api/top-langs/?username=drew-andersen&theme=vue-dark&show_icons=true&hide_border=true&layout=compact" 
                        alt="Drew AndersenGitHub Stats" 
                        className='stats'
                    />
                </div>
            </section> */}
        </>
    )
}