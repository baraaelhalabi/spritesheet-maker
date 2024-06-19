import { faXTwitter, faLinkedin, faGitlab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <nav className="grid grid-flow-col gap-4">
                <a href='https://baraaelhalabi.dev' className="link link-hover">baraaelhalabi.dev</a>
            </nav> 
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href='https://x.com/baraaelhalabi' className='link link-hover'><FontAwesomeIcon className='text-2xl' icon={faXTwitter}/></a>
                    <a href='https://www.linkedin.com/in/baraa-h-47a1ab12a/' className='link link-hover'><FontAwesomeIcon className='text-2xl' icon={faLinkedin}/></a>
                    <a href='https://gitlab.com/baraaelhalabi' className='link link-hover'><FontAwesomeIcon className='text-2xl' icon={faGitlab}/></a>
                </div>
            </nav> 
            <aside>
                <p>Copyright © 2024 - All right reserved by Baraa Al-Halabi</p>
            </aside>
        </footer>
    )
}

export default Footer;