import React from 'react';
import { SiWhatsapp, SiGmail, SiMessenger } from 'react-icons/si';
import { BsArrowRightShort } from 'react-icons/bs';

function Contact() {
    return (
        <div>
            <section class="contact section" id="contact">
                <span class="section__subtitle">Get in touch</span>
                <h2 class="section__title">Contact Me</h2>

                <div class="contact__container container grid">
                    <div class="contact__content">
                        <h3 class="contact__title">Talk to me</h3>

                        <div class="contact__info">
                            <div class="contact__card">
                                <SiGmail class="bxl-gmail contact__card-icon" color="red" />
                                <h3 class="contact__card-title">Email</h3>
                                <span class="contact__card-data">calvin.langerr@gmail.com</span>

                                <a
                                    href="mailto: calvin.langerr@gmail.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    class="contact__button"
                                >
                                    Write me
                                    <BsArrowRightShort class="bx-right-arrow-alt contact__button-icon" />
                                </a>
                            </div>

                            <div class="contact__card">
                                <SiWhatsapp class="bxl-whatsapp contact__card-icon" color="#25D366" />
                                <h3 class="contact__card-title">Whatsapp</h3>
                                <span class="contact__card-data">+48 531 266 815</span>

                                <a
                                    href="https://wa.me/48531266815?text="
                                    target="_blank"
                                    rel="noreferrer"
                                    class="contact__button"
                                >
                                    Write me
                                    <BsArrowRightShort class="bx-right-arrow-alt contact__button-icon" />
                                </a>
                            </div>

                            <div class="contact__card">
                                <SiMessenger class="bxl-messenger contact__card-icon" color="#006AFF" />
                                <h3 class="contact__card-title">Messenger</h3>
                                <span class="contact__card-data">Bartłomiej Harasim</span>

                                <a
                                    href="https://m.me/calvinlangerr"
                                    target="_blank"
                                    rel="noreferrer"
                                    class="contact__button"
                                >
                                    Write me
                                    <BsArrowRightShort class="bx-right-arrow-alt contact__button-icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="contact__content">
                        <h3 class="contact__title">Write me your question</h3>

                        <form action="mail.php" method="POST" class="contact__form">
                            <div class="contact__form-div">
                                <label for="" class="contact__form-tag">Names</label>
                                <input
                                    type="text"
                                    name="names"
                                    placeholder="Insert your name"
                                    class="contact__form-input"
                                />
                            </div>

                            <div class="contact__form-div">
                                <label for="" class="contact__form-tag">Email</label>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Insert your email"
                                    class="contact__form-input"
                                />
                            </div>

                            <div class="contact__form-div contact__form-area">
                                <label for="" class="contact__form-tag">Question</label>
                                <textarea
                                    name="message"
                                    id=""
                                    cols="30"
                                    rows="10"
                                    class="contact__form-input"
                                    placeholder="Write your question"
                                ></textarea>
                                <button class="button button-form" type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div >
    );
}

export default Contact;