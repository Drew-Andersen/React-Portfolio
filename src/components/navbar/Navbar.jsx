import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../theme/Themecontent';
import './nav.css';
 
function Navbar() {
    const currentPage = useLocation().pathname;
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
 
    const closeMenu = () => setIsOpen(false);
 
    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key === "Escape") closeMenu();
        }
        if (isOpen) {
            document.addEventListener('keydown', onKeyDown)
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.removeEventListener('keydown', onKeyDown)
            document.body.style.overflow = ''
        }
    }, [isOpen])
 
    const navLinks = [
        { to: '/', label: 'About' },
        { to: '/portfolio', label: 'Work' },
        { to: '/contact', label: 'Contact' }
    ]
 
    return (
        <>
            <nav className='nav-custom w-100 d-flex justify-content-between align-items-center'>
                <Link to="/" className='nav-logo px-4 pt-2' onClick={closeMenu}>Drew Andersen</Link>
 
                <div className='nav-controls'>
                    <button
                        className='theme-toggle'
                        onClick={toggleTheme}
                        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                        aria-pressed={theme === 'dark'}
                    >
                        <span className={`theme-toggle-track${theme === 'dark' ? ' is-dark' : ''}`}>
                            <span className='theme-toggle-thumb'>
                                <i className={theme === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun'}></i>
                            </span>
                        </span>
                    </button>
 
                    <button
                        className='burger-btn'
                        onClick={() => setIsOpen(true)}
                        aria-label='Open menu'
                        aria-expanded={isOpen}
                    >
                        <i className='fa-solid fa-bars'></i>
                    </button>
                </div>
            </nav>
 
            {isOpen && (
                <div className='nav-overlay' onClick={closeMenu}>
                    <div
                        className='nav-panel'
                        role='dialog'
                        aria-modal='true'
                        aria-label='Site navigation'
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className='nav-panel-close' onClick={closeMenu} aria-label='Close menu'>
                            <i className='fa-solid fa-xmark'></i>
                        </button>
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                onClick={closeMenu}
                                className={currentPage === link.to ? 'nav-panel-link active' : 'nav-panel-link'}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}
 
export default Navbar;