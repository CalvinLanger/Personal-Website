import React from 'react';
import { FaFacebookSquare, FaGithubSquare, FaStackOverflow } from 'react-icons/fa';

const date = new Date();
const todayYear = date.getFullYear();

function Footer() {
    return (
        <div>
            <footer class="footer">
                <div class="footer__container container">
                    <h1 class="footer__title">Abstergo.inc</h1>

                    <ul class="footer__social">
                        <a
                            href="https://www.facebook.com/calvinlangerr/"
                            class="footer__social-link"
                        >
                            <FaFacebookSquare />
                        </a>
                        <a
                            href="https://stackoverflow.com/users/13155075/calvin-langer"
                            class="footer__social-link"
                        >
                            <FaStackOverflow />
                        </a>
                        <a href="https://github.com/CalvinLanger" class="footer__social-link">
                            <FaGithubSquare />
                        </a>
                    </ul>

                    <span class="footer__copy">
                        &#169; Abstergo.inc {todayYear}. All rights reserved.
                    </span>
                </div>
            </footer>
        </div>
    );
}

export default Footer;