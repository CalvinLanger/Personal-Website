import React, { useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { BiHomeAlt, BiUser, BiBook, BiMessageSquareDetail } from 'react-icons/bi';



function Header() {

    const [lightMode, setLightMode] = useState(true);

    function changeTheme() {
        setLightMode(!lightMode);
        document.body.classList.toggle("light-theme");
    }

    return (
        <div>
            <header class="header" id="header">
                <nav class="nav container">
                    <a href="#" class="nav__logo">ABSTERGO.inc</a>

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
                        <FiMoon class="themeLogo" onClick={changeTheme} />
                        :
                        <FiSun class="themeLogo" onClick={changeTheme} />
                    }
                </nav>
            </header>
        </div>
    );
}

export default Header;