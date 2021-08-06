import React from 'react';
import tgIcon from '../icons/social/telegram.svg';
import myPhoto from '../img/main_photo.jpg';


function Contacts() {
    return (
        <section className="contacts" id="contacts">
            <div className="container">
                <div className="contacts__wrapper">
                    <div className="contacts__photo">
                        <img src={myPhoto} alt="me" />
                    </div>
                    <div className="contacts__descr">
                        <h2 className="title title_fz20 about__title">Contacts</h2> 
                        <div className="divider"></div>
                        <div className="contacts__social">
                            <a href="https://t.me/flamesickk" className="contacts__link">
                                <img src={tgIcon} alt="telegram" />
                            </a>
                            {/* <a href="#" className="contacts__link">
                                <img src={tgIcon} alt="telegram" />
                            </a>
                            <a href="#" className="contacts__link">
                                <img src={tgIcon} alt="telegram" /> 
                            </a> */}
                        </div>
                        <div className="title title_fz16 contacts__subtitle">
                            Or leave your report and I will answer you soon!
                        </div>
                        <form action="#" className="contacts__form">
                            <div className="contacts__input">
                                <input name="name" type="text" id="name"/>
                                <label htmlFor="name">Your name</label>
                            </div>
                            <div className="contacts__input">
                                <input name ="email" type="email" id="email"/>
                                <label htmlFor="email">Your email</label>
                            </div>
                            <div className="contacts__textarea">
                               <textarea name="text" id="text"></textarea>
                               <label htmlFor="text">Your message</label>
                            </div>
                            <div>
                                <button className="contacts__btn">Send message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts