import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFontAwesome, faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMap } from '@fortawesome/free-regular-svg-icons'

const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);

    const handleMenuToggle = () => {
        setMenuActive(!menuActive);
        const nav = document.querySelector('.header-area .nav');
        if (nav) {
            nav.style.display = menuActive ? 'none' : 'flex';
        }
    };

    const handleMenuLinkClick = (target) => {
        const width = window.innerWidth;
        if (width < 991) {
            setMenuActive(false);
            const nav = document.querySelector('.header-area .nav');
            if (nav) {
                nav.style.display = 'none';
            }
        }

        const targetElement = document.querySelector(target);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <div className="sub-header">
                <div className="container">
                    <div className="row flex justify-between">
                        <div className="col-lg-8 col-md-8">
                            <ul className="info">
                                <li><i><FontAwesomeIcon icon={faEnvelope} /></i> info@company.com</li>
                                <li><i><FontAwesomeIcon icon={faMap} /></i> Sunny Isles Beach, FL 33160</li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <ul className="social-links">
                                <li><a href="#"><i><FontAwesomeIcon icon={faFacebook} /></i></a></li>
                                <li><a href="https://x.com/minthu" target="_blank"><i><FontAwesomeIcon icon={faTwitter} /></i></a></li>
                                <li><a href="#"><i><FontAwesomeIcon icon={faLinkedin} /></i></a></li>
                                <li><a href="#"><i><FontAwesomeIcon icon={faInstagram} /></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <header className="header-area header-sticky">
                <div style={{ margin: 'auto' }} className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav style={{ display: 'flex', alignItems: 'center' }} className="main-nav">
                                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }} className="logo">
                                    <h1>Villa</h1>
                                </Link>

                                <ul style={{
                                    display: 'flex',
                                    listStyle: 'none',
                                    margin: 0,
                                    padding: 0,
                                    marginLeft: 'auto'
                                }} className="nav">
                                    <li><Link to="/" className="active">Home</Link></li>
                                    <li><Link to="/">Properties</Link></li>
                                    <li><Link to="/">Property Details</Link></li>
                                    <li><Link to="/">Contact Us</Link></li>
                                    <li><Link to="/"><i className="fa fa-calendar"></i> Schedule a visit</Link></li>
                                </ul>

                                <a className='menu-trigger' onClick={handleMenuToggle}>
                                    <span>Menu</span>
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar
