import React from 'react';
import { BiBadgeCheck } from 'react-icons/bi';

function Skills() {
    return (
        <div>
            <section class="skills section" id="skills">
                <span class="section__subtitle">My Abilities</span>
                <h2 class="section__title">My Experience</h2>

                <div class="skills__container container grid">
                    <div class="skills__content">
                        <h3 class="skills__title">Frontend Developer</h3>

                        <div class="skills__box">
                            <div class="skills__group">
                                <div class="skills__data">
                                    <BiBadgeCheck class="bxs-badge-check" />

                                    <div>
                                        <h3 class="skills__name">HTML</h3>
                                        <span class="skills__level">ADVANCED</span>
                                    </div>
                                </div>

                                <div class="skills__data">
                                    <BiBadgeCheck class="bxs-badge-check" />

                                    <div>
                                        <h3 class="skills__name">CSS</h3>
                                        <span class="skills__level">INTERMEDIATE</span>
                                    </div>
                                </div>

                                <div class="skills__data">
                                    <BiBadgeCheck class="bxs-badge-check" />

                                    <div>
                                        <h3 class="skills__name">JavaScript</h3>
                                        <span class="skills__level">BASIC</span>
                                    </div>
                                </div>
                            </div>

                            <div class="skills__group">
                                <div class="skills__data">
                                    <BiBadgeCheck class="bxs-badge-check" />

                                    <div>
                                        <h3 class="skills__name">REACT</h3>
                                        <span class="skills__level">BASIC</span>
                                    </div>
                                </div>

                                <div class="skills__data">
                                    <BiBadgeCheck class="bxs-badge-check" />

                                    <div>
                                        <h3 class="skills__name">GIT</h3>
                                        <span class="skills__level">BASIC</span>
                                    </div>
                                </div>

                                <div class="skills__data">
                                    <BiBadgeCheck class="bxs-badge-check" />

                                    <div>
                                        <h3 class="skills__name">Linux</h3>
                                        <span class="skills__level">BASIC</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Skills;