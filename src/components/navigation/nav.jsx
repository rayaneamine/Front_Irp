import React from "react";
import { Link } from "react-router-dom";
import "./nav.scss";

const Nav = () => {
    return (
        <>
        <div className="callToAction">
        <ul>
                <li className="btn_connexion">
                    <Link 
                        to={{pathname: `connexion/${1}`}}
                        state={{title: "Page Connexion"}}>Accueil</Link>

                </li>
                <li className="btn_inscription">
                        <Link 
                            to={{pathname: `inscription/${1}`}}
                            state={{title: "Page Inscription"}}>Description de la panne</Link>
                </li>
        </ul>
        </div>
        <div className="nav">
            <Link
                to="/"
                className="navLiens"
            > Marque
            </Link>
            <Link
                to="/Service"
                className="navLiens"
            >Model
            </Link>
            <Link
                to="/about"
                className="navLiens"
            >Pièces concernées
            </Link>
            <Link to="/contact" className="navLiens">
                Critères de recherche
            </Link>
            <Link to="/contact" className="navLiens">
                Go
            </Link>

        </div>
        </>
    )
}
export default Nav;