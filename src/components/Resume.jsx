import React from 'react';
import experienceIcon from '../icons/experience/university.svg';
import coursesIcon from '../icons/experience/courses.svg';
import devIcon from '../icons/experience/developer.svg';


function Resume() {
    return (
        <section className="resume" id="resume">
            <div className="container">
                <h2 className="title title_fz20 title__section-title">Experience</h2>
                <div className="divider"></div>
                <div className="resume__wrapper">
                    <div className="resume__column">
                        <h3 className="title title_fz16 resume__column-title">Education</h3>
                        <ul>
                            <li>
                                <div className="resume__item">
                                    <div className="resume__item-head">
                                        <div className="resume__item-icon">
                                            <img src={devIcon} alt="courses" />
                                        </div>
                                        <h4 className="title title_fz14">IT-INCUBATOR</h4>
                                        <div className="resume__item-location">React-development | 2021</div>
                                    </div>
                                    <div className="resume__item-body">Study React, Javascript, Redux, Storybook and unit testing, typescript, redux-thunk.</div>
                                </div>
                            </li>
                            <li>
                                <div className="resume__item">
                                    <div className="resume__item-head">
                                        <div className="resume__item-icon">
                                            <img src={coursesIcon} alt="university" />
                                        </div>
                                        <h4 className="title title_fz14">Udemy</h4>
                                        <div className="resume__item-location">Web-development | 2020</div>
                                    </div>
                                    <div className="resume__item-body">
                                    Completed the full course on layout from Ivan Petrichenko. Learn HTML, CSS and how to use Sass(Scss), Gulp, adaptive layout. Work with figma, avocode and photoshop. <a href="https://www.udemy.com/course/webdeveloper/"> https://www.udemy.com/course/webdeveloper </a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="resume__item">
                                    <div className="resume__item-head">
                                        <div className="resume__item-icon">
                                            <img src={experienceIcon} alt="university" />
                                        </div>
                                        <h4 className="title title_fz14">Polotsk State University</h4>
                                        <div className="resume__item-location">Civil engineer diploma | Novopolotsk (2014-2019)</div>
                                    </div>
                                    <div className="resume__item-body">
                                    Higher technical education. Worked for two years in this specialty. Responsibilities included: work with drawings, autocad, exsel, business correspondence.
                                    </div>
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="resume__column">
                    <h3 className="title title_fz16 resume__column-title">Experience</h3>
                        <ul>
                            <li>
                                <div className="resume__item">
                                    <div className="resume__item-head">
                                        <div className="resume__item-icon">
                                            <img src={experienceIcon} alt="university" />
                                        </div>
                                        <h4 className="title title_fz14">Freelance</h4>
                                        <div className="resume__item-location">2021</div>
                                    </div>
                                    <div className="resume__item-body">
                                        Work on apps, such as social network, todolists, counter.
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume

