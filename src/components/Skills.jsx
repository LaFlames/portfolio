import React from 'react';
import htmlIcon from '../icons/skills/html5.svg';
import cssIcon from '../icons/skills/css3.svg';
import jsIcon from '../icons/skills/js.svg';
import reactIcon from '../icons/skills/react.svg';
import typescriptIcon from '../icons/skills/typescript.svg';
import reduxIcon from '../icons/skills/redux.svg';


function Skills() {
    return (
        <section className="skills" id="skills">
            <div className="container">
                <h2 className="title title_fz20 title__section-title">Skills</h2>    
                <div className="divider"></div>
                <div className="skills__items">
                    <div className="skills__item">
                        <img src={htmlIcon} alt="html" />
                        <h2 className="title title_fz16 skills__item-title">HTML5</h2>
                        <p className="skills__item-descr">
                            It creates the skeleton of your site or application, and the fifth version will allow me to create a more SEO-optimized structure of your product.
                        </p>
                    </div>
                    <div className="skills__item">
                        <img src={cssIcon} alt="css" />
                        <h2 className="title title_fz16 skills__item-title">CSS3</h2>
                        <p className="skills__item-descr">
                            This style language allows me to create absolutely any look for your site or application. Everything is limited only by your imagination!
                        </p>
                    </div>
                    <div className="skills__item">
                        <img src={jsIcon} alt="js" />
                        <h2 className="title title_fz16 skills__item-title">JS</h2>
                        <p className="skills__item-descr">
                            This programming language allows you to bring anything to life: sliders, windows, tooltips, tabs, getting data from the server and much more.
                        </p>
                    </div>
                    <div className="skills__item">
                        <img src={reactIcon} alt="react" />
                        <h2 className="title title_fz16 skills__item-title">React</h2>
                        <p className="skills__item-descr">
                            This library allows you to create web applications. We can create the most interactive product specifically for your goals
                        </p>
                    </div>
                    <div className="skills__item">
                        <img src={reduxIcon} alt="redux" />
                        <h2 className="title title_fz16 skills__item-title">Redux</h2>
                        <p className="skills__item-descr">
                        Redux is a predictable state container designed to help you write JavaScript apps that behave consistently across client, server, and native environments and are easy to test. 
                        </p>
                    </div>
                    <div className="skills__item">
                        <img src={typescriptIcon} alt="typescript" />
                        <h2 className="title title_fz16 skills__item-title">Typescript</h2>
                        <p className="skills__item-descr">
                        TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills