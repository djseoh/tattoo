import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
const Nav = () => (
    <nav>
        <div>
            <a className="hvr-overline-reveal left" href="#">About Us</a>
            <a className="hvr-overline-reveal left" href="#">Discover</a>
            <a className="hvr-overline-reveal left" href="#">Contact</a>
            <a className="hvr-overline-reveal left" href="#">Profile</a>
        </div>
        <a className="font" href="/">
            Ink It.
        </a>
        <div>
            <a className="hvr-overline-reveal right" href="#">Log-in</a>
            <a className="hvr-overline-reveal right" href="#">Sign up</a>
        </div>
    </nav>
);

export default Nav;