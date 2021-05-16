import React, { useState } from 'react';
import facebookLogo from '../icons/social/facebook.svg';
import instagramLogo from '../icons/social/instagram.svg';
import githubLogo from '../icons/social/github.svg';
import close from '../icons/close.svg';


export function Promo() {

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
            <a href="#" className="sidepanel__link"><img src={facebookLogo} alt="facebook" /></a>
            <a href="#" className="sidepanel__link"><img src={instagramLogo} alt="instagram" /></a>
            <a href="#" className="sidepanel__link"><img src={githubLogo} alt="github" /></a>
            <div className="sidepanel__divider"></div>
            <div className="sidepanel__text"><span>Социальные сети</span></div>
        </aside>

            <div className={openMenuClass}>
                <div className="menu__block">
                    <div onClick={closeMenuHandler} className="menu__close">
                        <img src={close} alt="close" />
                    </div>
                    <nav>
                        <ul className="menu__list">
                            <li className="menu__link"><a href="#">ПРО МЕНЯ</a></li>
                            <li className="menu__link"><a href="#">МОЙ ОПЫТ</a></li>
                            <li className="menu__link"><a href="#">МОИ НАВЫКИ</a></li>
                            <li className="menu__link"><a href="#">МОИ РАБОТЫ</a></li>
                            <li className="menu__link"><a href="#">КОНТАКТЫ</a></li>
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
                <div className='title title_fz16 promo__subtitle'>Меня зовут Козловский Виталий</div>
                <h1 className='title title_fz48 promo__title'>Я frontend-developer из города Новополоцк</h1>
                <div className='promo__btns'>
                    <a href="#" className='promo__link btn'>Портфолио</a>
                    <a href="#" className='promo__link'>Про меня</a>
                </div>
            </div>
        </section>
        
        </div>
    )

    

}