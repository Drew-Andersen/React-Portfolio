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
                        Hello! I am a full stack developer with a passion for creating user friendly applications. I graduated from Georgia Southern University with a BS in Biology and a minor in Chemistry in 2017 with hopes on attening
                        veternarian school. After graduating, I found a passion for fitness and health which lead me to get a job as a personal trainer. Working as a personal trainer opened a door for me to work in health
                        promotion and wellness at the local hospital. After two years of working in health promotion and wellness, I moved to Savannah, GA and started working in logistics but kept personal training on the side.
                        I working in Savannah for four years and found that I enjoyed working with computers and learning how they work. I obtained two certifications from FreeCodeCamp in coding. That lead me to leave logistics
                        and go full time into web / software development. I attended UCF's Coding Bootcamp where I obtained a Full Stack Developer Certicication.
                        <br /><br />
                        Outside of web / software development, I find great joy in health and fitness. I have competed in strongman, body building, and CrossFit. I am hoping to compete again in the future.
                        <br /><br />
                        I am particularly interested in connecting with potential mentors, tech enthusiasts, and anyone passionate about full stack development. If you would like to collaborate with me fill out
                        the contact form. I am excited to connect with like-minded individuals who share my enthusiasm.
                    </p>
                </div>
            </section>
            <section className='technologies-section my-5'>
                <div className="technologies-header text-center">
                    <h2>Technologies</h2>
                </div>
                <div className="container mb-5">
                    <div className='row progress-bar'>
                        <div className="col-md-12 d-flex flex-wrap">
                            <div className="col-md-4 react-div">
                                <div id='progress' className='icon d-flex justify-content-center align-items-center border p-5' data-percent='84'>
                                    <div className="inner">
                                        <i className="fa-brands fa-react"></i>
                                    </div>
                                </div>
                                <h5 className='mb-3'>REACT</h5>
                            </div>
                            <div className="col-md-4 node-div">
                                <div id='progress'  className='icon d-flex justify-content-center align-items-center border p-5'>
                                    <div className="inner">
                                        <i className="fa-brands fa-node"></i>
                                    </div>
                                </div>
                                <h5 className='mb-3'>Node.js</h5>
                            </div>
                            <div className="col-md-4 JS-div">
                                <div id='progress'  className='icon d-flex justify-content-center align-items-center border p-5'>
                                    <div className="inner">
                                        <i className="fa-brands fa-js"></i>
                                    </div>
                                </div>
                                <h5 className='mb-3'>JavaScript</h5>
                            </div>
                            <div className="col-md-4 html-div">
                                <div id='progress'  className='icon d-flex justify-content-center align-items-center border p-5'>
                                    <div className="inner">
                                        <i className="fa-brands fa-html5"></i>
                                    </div>
                                </div>
                                <h5 className='mb-3'>HTML</h5>
                            </div>
                            <div className="col-md-4 css-div">
                                <div id='progress'  className='icon d-flex justify-content-center align-items-center border rounded-circle p-5'>
                                    <div className="inner">
                                        <i className="fa-brands fa-css3-alt"></i>
                                    </div>
                                </div>
                                <h5 className='mb-3'>CSS</h5>
                            </div>
                            <div className="col-md-4 sql-div">
                                <div id='progress'  className='icon d-flex justify-content-center align-items-center border rounded-circle p-5'>
                                    <div className="inner">
                                        <i className="fa-solid fa-database"></i>
                                    </div>
                                </div>
                                <h5 className='mb-3'>NoSQL + PostgreSQL</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}