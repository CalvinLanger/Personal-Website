import React, { useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { BiHomeAlt, BiUser, BiBook, BiMessageSquareDetail } from 'react-icons/bi';



function Header(props) {

    const [lightMode, setLightMode] = useState(false);

    return (
        <div>
            <header class="header" id="header">
                <nav class="nav container">
                    <a href="https://www.abstergo.pl/" class="nav__logo">ABSTERGO.inc</a>

                    <div class="nav__menu">
                        <ul class="nav__list">
                            <li class="nav__item">
                                <a href="#home" class="nav__link active__link">
                                    <BiHomeAlt />
                                </a>
                            </li>

                            <li class="nav__item">
                                <a href="#about" class="nav__link">
                                    <BiUser />
                                </a>
                            </li>

                            <li class="nav__item">
                                <a href="#skills" class="nav__link">
                                    <BiBook />
                                </a>
                            </li>

                            <li class="nav__item">
                                <a href="#contact" class="nav__link">
                                    <BiMessageSquareDetail />
                                </a>
                            </li>
                        </ul>
                    </div>
                    {lightMode ?
                        <FiMoon class="themeLogo" onClick={() => { setLightMode(!lightMode); }} />
                        :
                        <FiSun class="themeLogo" onClick={() => { setLightMode(!lightMode); }} />
                    }
                </nav>
            </header>
        </div>
    );
}

export default Header;