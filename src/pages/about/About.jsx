import img from './images/Profile-img.jpeg';
import logo from './images/Logo.png';
import './about.css';

export default function About() {
    return (
        <>
            <div className='text-center logo'>
                <img src={logo} alt='Logo for portfolio' />
            </div>
            <section className='about-section my-5'>
                <div className='about-header px-2 text-center'>
                    <h2>About Me</h2>
                </div>
                <div className='about-div my-4 mx-auto w-75'>
                    <div className='text-center'>
                        <img src={img} alt='profile image' className='profile-img rounded-circle mx-5' />
                    </div>
                    <p className='m-4'>
                        Hi, I'm a developer who works comfortably across the front-end, back-end, and increasingly the AI layer
                        in between - I'm looking for my first role as a full stack developer, front-end developer, AI engineer, 
                        wherever I can build things people actually use.
                        <br /> <br />
                        My path here was't linear. I started with a BS in Biology from Georgia Southern University, headed toward veterinary
                        medicine, before a passion for fitness and health pulled me into personal training and later into health promotion 
                        at a hospital. After two years in wllness and a stint in logistics, I found coding - and it stuck. That non-traditional
                        route taught me how to learn fast, work directly with people, and stay accountable to results, which carries straight
                        into how I approach engineering.
                        <br /><br />
                        I built on FreeCodecamp certifications with a Full Stack Developer certification from the University of Central Florida's
                        Coding Bootcamp. On the front-end, I build interfaces in React with usability in mind — years spent watching 
                        people struggle with clunky software, or thrive with well-designed software, as a trainer taught me to notice friction 
                        most developers overlook. On the back-end, I build APIs and data models with Node/Express and PostgreSQL or MongoDB. 
                        And on the AI side, my flagship project — an AI-assisted personal training app — pairs a React front end with a 
                        Python/FastAPI service handling the AI-driven training logic, which is where I've been focusing most of my 
                        recent learning.
                        <br /><br />
                        Outside of tech, I'm a lifelong fitness enthusiast who's competed in strongman, bodybuilding, and Crossfit - with plans to 
                        compete again. That background is directly why I build the tools I build; the AI-assisted fitness training app and the 
                        wedding budget tracker below both started as problems I needed solved for myself first.
                        <br /><br />
                        Always glad to connect with other developers, mentors, and tech folks - feel free to reach out.
                    </p>
                </div>
            </section>
            <section className='goals-section my-5 text-center'>
                <div className='skills-header px-2'>
                    <h2>What I'm looking for</h2>
                </div>
                <div className='goals-tags mx-auto'>
                    <span className='skill-tag'>Full Stack Developer</span>
                    <span className='skill-tag'>Front-end Developer</span>
                    <span className='skill-tag'>AI Engineer</span>
                    <span className='skill-tag'>Software Engineer</span>
                </div>
            </section>
            <section className='skills-section my-3'>
                <div className='skills-header px-2 text-center'>
                    <h2>Skills</h2>
                </div>
                <div className='skills-div mx-auto'>
                    <div className='skill-group'>
                        <h5>Languages</h5>
                        <div className='skill-tags'>
                            <span className='skill-tag'>JavaScript</span>
                            <span className='skill-tag'>Python</span>
                            <span className='skill-tag'>HTML</span>
                            <span className='skill-tag'>CSS</span>
                        </div>
                    </div>
                    <div className='skill-group'>
                        <h5>Front-end</h5>
                        <div className='skill-tags'>
                            <span className='skill-tag'>React</span>
                            <span className='skill-tag'>Bootstrap</span>
                            <span className='skill-tag'>Materialize</span>
                            <span className='skill-tag'>Tailwind</span>
                        </div>
                    </div>
                    <div className='skill-group'>
                        <h5>Back-end</h5>
                        <div className='skill-tags'>
                            <span className='skill-tag'>Node.js</span>
                            <span className='skill-tag'>Express</span>
                            <span className='skill-tag'>FastAPI</span>
                            <span className='skill-tag'>Django</span>
                            <span className='skill-tag'>PostgreSQL</span>
                            <span className='skill-tag'>MongoDB</span>
                        </div>
                    </div>
                    <div className='skill-group'>
                        <h5>Tools & Hosting</h5>
                        <div className='skill-tags'>
                            <span className='skill-tag'>Git</span>
                            <span className='skill-tag'>GitHub</span>
                            <span className='skill-tag'>Vercel</span>
                            <span className='skill-tag'>Render</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}