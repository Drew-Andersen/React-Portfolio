import Resume from './Resume.pdf';
import './footer-above.css';

export default function FooterAbove() {
    return (
        <>
            <div className="contact-links d-flex flex-wrap justify-content-around text-center my-5">
                <a href="https://github.com/Drew-Andersen" id="profile-link" className="button contact-details text-black mx-5" target="_blank">
                    <i className="fa fa-brands fa-github"></i>
                    <p className='display-none'>GitHub</p>
                </a>
                <a href="mailto:andrewtandersen@gmail.com" className="button contact-details text-black mx-5">
                    <i className="fa fa-envelope"></i>
                    <p className='display-none'>Email</p>
                </a>
                <a href="https://www.linkedin.com/in/andrew-andersen/" className="button contact-details text-black mx-5" target="_blank">
                    <i className="fa fa-linkedin"></i>
                    <p className='display-none'>LinkedIn</p>
                </a>
                <a href={Resume} className="button contact-details text-black mx-5" target="_blank">
                    <i className="fa fa-file"></i>
                    <p className='display-none'>Resume</p>
                </a>
            </div>
        </>
    )
}