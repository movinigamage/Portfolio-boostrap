import React from 'react';

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-content'>
                <div className='footer-left'>
                    <div className='footer-logo'>
                        <img src='Movini.jpg' alt="Movini Logo" />
                    </div>
                    <div className='footer-links pt-2'>
                        <ul className='list-inline mb-0'>
                            <li className='list-inline-item'><a href='#'>Home</a></li>
                            <li className='list-inline-item'><a href='#about'>About</a></li>
                            <li className='list-inline-item'><a href='#tech'>Tech Stack</a></li>
                            <li className='list-inline-item'><a href='#project'>Projects</a></li>
                            <li className='list-inline-item'><a href='#education'>Education</a></li>
                            <li className='list-inline-item'><a href='#qualification'>Qualification</a></li>
                            <li className='list-inline-item'><a href='#contact'>Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className='footer-right'>
                    <div className='footer-contact'>
                        <ul className='list-inline mb-0'>
                            <li className='list-inline-item'><a href='mailto:mwmgamage@gmail.com'>mwmgamage@gmail.com</a></li>
                            <li className='list-inline-item'>+94 768886618</li>
                            <li className='list-inline-item'><a href='https://github.com/movinigamage'><img src='Vector.jpg' alt="GitHub" width={30} height={30} /></a></li>
                            <li className='list-inline-item'><a href=''><img src="twitter.jpg" alt="Twitter" width={30} height={30} /></a></li>
                            <li className='list-inline-item'><a href='https://www.linkedin.com/in/movini/'><img src='linked.jpg' alt="LinkedIn" width={30} height={30} /></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='footer-text'>
                <p className='mb-0'>Designed and built by Movini.</p>
            </div>
        </div>
    );
}

export default Footer;
