import Resume from './Resume.pdf';
import './footer-above.css';

export default function FooterAbove() {
    return (
        <>
            <div className="contact-links d-flex flex-wrap justify-content-around text-center my-5">
                <a href="https://github.com/Drew-Andersen" id="profile-link" className="button contact-details text-black mx-5" target="_blank">
                    <i className="fa fa-brands fa-github"></i>
                    {/* GitHub */}
                </a>
                <a href="mailto:andrewtandersen@gmail.com" className="button contact-details text-black mx-5">
                    <i className="fa fa-envelope"></i>
                    {/* Email */}
                </a>
                <a href="https://www.linkedin.com/in/andrew-andersen/" className="button contact-details text-black mx-5" target="_blank">
                    <i className="fa fa-linkedin"></i>
                    {/* LinkedIn */}
                </a>
                <a href={Resume} className="button contact-details text-black mx-5" target="_blank">
                    <i className="fa fa-file"></i>
                    {/* Resume */}
                </a>
            </div>
        </>
    )
}