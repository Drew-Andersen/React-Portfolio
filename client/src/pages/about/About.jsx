import img from './images/Profile-img.jpeg';
import './about.css';

export default function About() {
    return (
        <>
            <h1 className='text-center my-5'>Drew Andersen</h1>
            <div className="d-flex container mx-3">
                <div className="about-header col-3 px-2 text-center">
                    About Me
                </div>
                <div className="about-section col-10">
                    <img src={img} className="profile-img rounded-circle mx-5" alt="profile image" />
                    <p className="mt-4">
                        I graduated from Georgia Southern University with a BS in Biology and a minor in Chemistry in 2017 with hopes to go to veternarian school. After graduating, I came to like working out and became
                        a personal trainer/group fitness coach for BodyWorX Studio 912, which opened a door for me to work in Health Promotion and Wellness at the local hospital.
                    </p>
                    <p>
                        After working there for two years I found a job in Savannah, GA as an operations member at a logistics company. I worked there for 4 years where I found that I liked to work with computers.
                        I found some free online courses to get me started in coding/ web development and ended up getting two certifications from FreeCodeCamp. I am currently enrolled in a coding bootcamp from UCF
                        with hopes to improve my coding skills and find a job in web / software development.
                    </p>
                </div>
            </div>
        </>
    )
}