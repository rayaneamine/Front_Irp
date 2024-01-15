import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./header.footer.scss";



const HeaderFooter = () => {
    return (
        <>
            <div class="enTete">
                <div className="navContainer">
                    <Link to="/"> <img className="logo" src="/asset/images/logo.png" alt="Logo IRP" /></Link>
                    <div className="callToAction">
                    <ul>
                            <li className="btn_connexion">
                                <Link 
                                    to={{pathname: `connexion/${1}`}}
                                    state={{title: "Page Connexion"}}>Connexion</Link>

                            </li>
                            <li className="btn_inscription">
                                    <Link 
                                        to={{pathname: `inscription/${1}`}}
                                        state={{title: "Page Inscription"}}>Inscription</Link>
                            </li>
                    </ul>
                    </div>
                    <div className="nav">
                        <Link
                            to="/"
                            className="navLiens"
                        > Home
                        </Link>
                        <Link
                            to="/Service"
                            className="navLiens"
                        >Services
                        </Link>
                        <Link
                            to="/about"
                            className="navLiens"
                        >About
                        </Link>
                        <Link to="/contact" className="navLiens">
                            Contact
                        </Link>

                    </div>

                </div>
               
            </div>

            <Outlet />
            
            <footer>
                <div id="scrollToTop"></div>
                <div class="optimal-width">
                    <div>
                        <a href="#">Mentions légales</a>
                        <a href="/cgu">CGU</a>
                    </div>
                    <div>
                        <h3>Plan du site</h3>
                        <a href="/">Home</a>
                        <a href="/Service">Services</a>
                        <a href="/about">A Propos</a>
                    </div>
                    <div>
                        <span>Où nous trouver ?</span>
                        <div class="mapouter">
                            <div class="gmap_canvas"><iframe width="300" height="170" id="gmap_canvas"
                                src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href="/contact">Contact</a>
                        <a>Où nous trouver ?</a>
                        <a >FAQ</a>
                    </div>
                    <div>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path
                                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg></a>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path
                                d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                        </svg></a>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path
                                d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                        </svg></a>
                    </div>
                </div>
            </footer>

        </>


    );
};

export default HeaderFooter;
