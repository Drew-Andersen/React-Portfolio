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
                <div className="about-div my-4">
                    <div className='text-center'>
                        <img src={img} className="profile-img rounded-circle mx-5" alt="profile image" />
                    </div>
                    <p className="m-4">
                        I graduated from Georgia Southern University with a BS in Biology and a minor in Chemistry in 2017 with hopes to go to veternarian school. After graduating, I came to like working out and became
                        a personal trainer/group fitness coach for BodyWorX Studio 912, which opened a door for me to work in Health Promotion and Wellness at the local hospital.
                        <br />
                        After working there for two years I found a job in Savannah, GA as an operations member at a logistics company. I worked there for 4 years where I found that I liked to work with computers.
                        I found some free online courses to get me started in coding/ web development and ended up getting two certifications from FreeCodeCamp. I am currently enrolled in a coding bootcamp from UCF
                        with hopes to improve my coding skills and find a job in web / software development.
                        <br /><br /><br />
                        Hello! I am a full stack developer with a passion for creating user friendly applications. I graduated from Georgia Southern University with a BS in Biology and a minor in Chemistry in 2017 with hopes on attening
                        veternarian school. After graduating, I found a passion for fitness and health which lead me to get a job as a personal trainer. Working as a personal trainer opened a door for me to work in health
                        promotion and wellness at the local hospital. After two years of working in health promotion and wellness, I moved to Savannah, GA and started working in logistics but kept personal training on the side.
                        I working in Savannah for four years and found that I enjoyed working with computers and learning how they work. I obtained two certifications from FreeCodeCamp in coding. That lead me to leave logistics
                        and go full time into web / software development. I attended UCF's Coding Bootcamp where I obtained a Full Stack Developer Certicication.
                    </p>
                </div>
            </section>
            <section className='technologies-section my-5'>
                <div className="technologies-header text-center">
                    <h2>Technologies</h2>
                </div>
                <div className="container">
                    <div className='row progress-bar'>
                        <div className="col-md-12 d-flex flex-wrap">
                            <div className="col-md-4 react-div">
                                <div className='icon border rounded-circle p-5'>
                                    <i className="fa-brands fa-react"></i>
                                </div>
                                <h3>REACT</h3>
                            </div>
                            <div className="col-md-4 react-div">
                                <div className='icon border p-5'>
                                    <i className="fa-brands fa-node"></i>
                                </div>
                                <h3>Node.js</h3>
                            </div>
                            <div className="col-md-4 react-div">
                                <div className='icon border rounded-circle p-5'>
                                    <i className="fa-brands fa-js"></i>
                                </div>
                                <h3>JavaScript</h3>
                            </div>
                            <div className="col-md-4 react-div">
                                <div className='icon border rounded-circle p-5'>
                                    <i className="fa-brands fa-html5"></i>
                                </div>
                                <h3>HTML</h3>
                            </div>
                            <div className="col-md-4 react-div">
                                <div className='icon border rounded-circle p-5'>
                                    <i className="fa-brands fa-css3-alt"></i>
                                </div>
                                <h3>CSS</h3>
                            </div>
                            <div className="col-md-4 react-div">
                                <div className='icon border rounded-circle p-5'>
                                    <i className="fa-solid fa-database"></i>
                                </div>
                                <h3>NoSQL + PostgreSQL</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}