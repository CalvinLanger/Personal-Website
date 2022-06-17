import React from 'react';
import { FaAward, FaBriefcase, FaHeadset } from 'react-icons/fa';

function About() {
    return (
        <div>
            <section class="about section" id="about">
                <span class="section__subtitle">My Intro</span>
                <h2 class="section__title">About Me</h2>

                <div class="about__container container">
                    <img src="./assets/img/calvin.langer.jpg" alt="" class="about__img" />

                    <div class="about__data">
                        <div class="about__info">
                            <div class="about__box">
                                <FaAward class="about__icon" />
                                <h3 class="about__title">Experience</h3>
                                <span class="about__subtitle">+1 year</span>
                            </div>

                            <div class="about__box">
                                <FaBriefcase class="about__icon" />
                                <h3 class="about__title">Completed</h3>
                                <span class="about__subtitle">10+ Projects</span>
                            </div>

                            <div class="about__box">
                                <FaHeadset class="about__icon" />
                                <h3 class="about__title">Support</h3>
                                <span class="about__subtitle">Online 24/7</span>
                            </div>
                        </div>

                        <p class="about__description">
                            Frontend developer, I create web pages with UI / UX user
                            interface, I'm begginer of programming but I quick learn new
                            things.
                        </p>

                        <a href="#contact" class="button">Contact Me</a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;