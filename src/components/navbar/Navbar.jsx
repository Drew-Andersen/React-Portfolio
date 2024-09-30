import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './nav.css';

function Navbar() {
    const currentPage = useLocation().pathname;
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className='nav-custom w-100 d-flex justify-content-between'>
            <h1 className='px-4 pt-2'>Drew Andersen</h1>
            <div className='menu-icons' onClick={toggleMenu}>
                <i className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
            </div>
            <ul className={isOpen ? "nav-menu active d-flex justify-content-end p-2 bg-navbar" : "nav-menu d-flex justify-content-end p-2 bg-navbar"}>
            {/* <ul className='d-flex justify-content-end p-2 bg-navbar'> */}
                <li className='text px-3 py-1 mx-1'>
                    <Link to='/' className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>About</Link>
                </li>
                <li className='text px-3 py-1 mx-1'>
                    <Link to='/portfolio' className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</Link>
                </li>
                <li className='text px-3 py-1 mx-1'>
                    <Link to='/contact' className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;