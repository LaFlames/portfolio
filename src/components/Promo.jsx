import React, { useState } from 'react';
import facebookLogo from '../icons/social/facebook.svg';
import instagramLogo from '../icons/social/instagram.svg';
import githubLogo from '../icons/social/github.svg';
import close from '../icons/close.svg';


function Promo() {

    let [openMenuClass, setOpenMenuClass] = useState("menu");

    const openMenuHandler = () => {
        setOpenMenuClass("menu active")
    }
    const closeMenuHandler = () => {
        setOpenMenuClass("menu")
    }


    return (
        <div className='promo'>

            <aside className='sidepanel'>
                <div className="sidepanel__divider"></div>
                <a href="1" className="sidepanel__link"><img src={facebookLogo} alt="facebook" /></a>
                <a href="1" className="sidepanel__link"><img src={instagramLogo} alt="instagram" /></a>
                <a href="1" className="sidepanel__link"><img src={githubLogo} alt="github" /></a>
                <div className="sidepanel__divider"></div>
            </aside>

            <div className={openMenuClass}>
                <div className="menu__block">
                    <div onClick={closeMenuHandler} className="menu__close">
                        <img src={close} alt="close" />
                    </div>
                    <nav>
                        <ul className="menu__list">
                            <li className="menu__link">
                                <a href="#about" onClick={closeMenuHandler}>About me</a>
                            </li>
                            <li className="menu__link">
                                <a href="#resume" onClick={closeMenuHandler}>My experience</a>
                            </li>
                            <li className="menu__link">
                                <a href="#skills" onClick={closeMenuHandler}>Skills</a>
                            </li>
                            <li className="menu__link">
                                <a href="#contacts" onClick={closeMenuHandler}>Contacts</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="menu__overlay"></div>
            </div>
        
            <section>
                <div onClick={openMenuHandler} className='hamburger'>
                    <span></span>
                    <span className='long'></span>
                    <span></span>
                </div>
                <div className='container'>
                    <div className='title title_fz16 promo__subtitle'>Hello my friends!</div>
                    <h1 className='title title_fz48 promo__title'>I am Vitali Kazlouski, a front-end developer</h1>
                    <div className='promo__btns'>
                        <a href="#portfolio" className='promo__link btn'>Portfolio</a>
                        {/* <a href="#" className='promo__link'>About me</a> */}
                    </div>
                </div>
            </section>
        
        </div>
    )
}

export default Promo