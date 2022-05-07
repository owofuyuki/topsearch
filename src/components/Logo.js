import { useState, useEffect } from "react";
import logoLight from "../assets/images/logo-light.png";
import logoDark from "../assets/images/logo-dark.png";

const Logo = (props) => {
    return (
        <div className="center Logo">
            <img src={props.theme === "light" ? logoLight : logoDark} alt="topSearch" />
        </div>
    );
};

export default Logo;