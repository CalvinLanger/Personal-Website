import React from 'react';
import ProfilePic from '../img/whoami.jpg';
import { FaFacebookSquare, FaGithubSquare, FaStackOverflow } from 'react-icons/fa';

function Home() {
    return (
        <div>
            <section class="home section" id="home"></section>
            <div class="home__container container grid">
                <div class="home__data">
                    <span class="home__greeting">Hello, I'm</span>
                    <h1 class="home__name">Bartlomiej Harasim</h1>
                    <h3 class="home__education">IT Engineer</h3>

                    <div class="home__buttons">
                        <a href="./src/CV/B.Harasim__Kursy.zip" class="button button--ghost" download> Download CV </a>
                        <a href="#about" class="button">About me</a>
                    </div>
                </div>

                <div class="home__handle">
                    <img src={ProfilePic} alt="" class="home__img" />
                </div>

                <div class="home__social">
                    <a
                        href="https://www.facebook.com/calvinlangerr/"
                        class="home__social-link"
                    >
                        <FaFacebookSquare />
                    </a>
                    <a href="https://github.com/CalvinLanger" class="home__social-link">
                        <FaGithubSquare />
                    </a>
                    <a
                        href="https://stackoverflow.com/users/13155075/calvin-langer"
                        class="home__social-link"
                    >
                        <FaStackOverflow />
                    </a>
                </div>

                <a href="#about" class="home__scroll">
                    <i class="bx bx-mouse home__scroll-icon"></i>
                    <span class="home__scroll-name">Scroll Down</span>
                </a>
            </div>
        </div>
    );
}

export default Home;