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
                        <p className="about__text">Мне 23 года. Живу в Беларуси, город Новополоцк. Увлекаюсь спортом, в частности баскетболом и воркаутом. Окончил университет и получил специальность инженера-строителя. В данный момент развиваюсь как web-разработчик, front-end developer. Ищу работу по вакансии Junior front-end разработчик, готов к переезду.</p>
                    </div>
                    <div className="about__skills">
                        <div className="about__skills-item">
                            <div className="about__skills-circle">
                                <img src={webdevIcon} alt="web-dev" />
                            </div>
                            <div>
                                <div className="title title_fz16">
                                    Вёрстка сайтов
                                </div>
                                <div className="about__skills-text">
                                Верстаю лендинги, используя SASS/SCSS, Gulp, Grid, Flex.
                                </div>
                            </div>
                        </div>
                        <div className="about__skills-item">
                            <div className="about__skills-circle">
                                <img src={mobileDevIcon} alt="mobile-dev" />
                            </div>
                            <div>
                                <div className="title title_fz16">
                                    Разработка приложений
                                </div>
                                <div className="about__skills-text">
                                    Работа над приложениями, используя Javascript, React, Redux.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

