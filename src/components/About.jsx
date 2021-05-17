import React from 'react';
import MyPhoto from '../img/me.jpg';
import webdevIcon from '../icons/about_me/web_development.svg';
import mobileDevIcon from '../icons/about_me/mobile_dev.svg';

export default function About() {
    return (
        <section className="about">
            <div className="container">
                <div className="about__wrapper">
                    <div className="about__photo">
                        <img src={MyPhoto} alt="my_photo" />
                    </div>
                    <div className="about__descr">
                        <h2 className="title title_fz20 about__title">About me</h2>
                        <div className="divider"></div>
                        <p className="about__text">23 years old. I live in Belarus, Novopolotsk. I am fond of sports, basketball and workout in particular. In 2019 i graduated from the university and received the specialty of a civil engineer. But currently I want to be a great front-end developer. Looking for a job for the vacancy Junior front-end developer, ready to move.</p>
                    </div>
                    <div className="about__skills">
                        <div className="about__skills-item">
                            <div className="about__skills-circle">
                                <img src={webdevIcon} alt="web-dev" />
                            </div>
                            <div>
                                <div className="title title_fz16">
                                    Website layout
                                </div>
                                <div className="about__skills-text">
                                    Layout landings, using SASS/SCSS, Gulp, Grid, Flex.
                                </div>
                            </div>
                        </div>
                        <div className="about__skills-item">
                            <div className="about__skills-circle">
                                <img src={mobileDevIcon} alt="mobile-dev" />
                            </div>
                            <div>
                                <div className="title title_fz16">
                                    App development
                                </div>
                                <div className="about__skills-text">
                                    Work on creating dextop apps, using Javascript, React, Redux.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

