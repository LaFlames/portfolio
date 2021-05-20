import React from 'react';
import todolistImg from '../img/works/plans.jpg';
import socialImg from '../img/works/socialnetwork.jpg';
import pulseImg from '../img/works/pulse.jpg';
import uberImg from '../img/works/uber.jpg';
import noImg from '../img/works/no.png';


function Portfolio() {
    return (
        <section className="portfolio" id="portfolio">
            <div className="container">
                <h2 className="title title_fz20 title__section-title">Portfolio</h2>    
                <div className="divider"></div>
                <div className="portfolio__wrapper">
                    <a href="#" className="portfolio__item">
                        <img src={uberImg} alt="uber" />
                    </a>
                    <a href="#" className="portfolio__item">
                        <img src={socialImg} alt="socialnet" />
                    </a>
                    <a href="#" className="portfolio__item">
                        <img src={pulseImg} alt="pulse" />
                    </a>
                    <a href="#" className="portfolio__item vertical">
                        <img src={todolistImg} alt="todolist" />
                    </a>
                    <a href="#" className="portfolio__item">
                        <img src={noImg} alt="no" />
                    </a>
                    <a href="#" className="portfolio__item">
                        <img src={noImg} alt="no" />
                    </a>
                    <a href="#" className="portfolio__item">
                        <img src={noImg} alt="no" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Portfolio