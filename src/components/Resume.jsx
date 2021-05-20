import React from 'react';
import experienceIcon from '../icons/experience/university.svg';
import coursesIcon from '../icons/experience/courses.svg';
import devIcon from '../icons/experience/developer.svg';


function Resume() {
    return (
        <section className="about">
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
                                    <div className="resume__item-body">Still studying.</div>
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
                                    Completed the full course on layout from Ivan Petrichenko <a href="https://www.udemy.com/course/webdeveloper/"> https://www.udemy.com/course/webdeveloper </a>
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
                                    Higher technical education. Worked for two years in this specialty. Responsibilities included: work with drawings, autocad, exsel.
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
                                        <h4 className="title title_fz14">Don't have any commercial exp:(</h4>
                                        <div className="resume__item-location">.</div>
                                    </div>
                                    <div className="resume__item-body">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sint molestiae voluptate! Quibusdam quaerat fugit mollitia cumque natus necessitatibus ipsum maxime delectus possimus? Voluptatibus corporis laudantium saepe et reprehenderit ipsum!
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

