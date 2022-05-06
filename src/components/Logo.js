import { useState, useEffect } from "react";
import logoImg from "../assets/images/logo-light.png"

const Logo = () => {
    return (
        <div className="center Logo">
            <img src={logoImg} alt="topSearch" />
        </div>
    );
};

export default Logo;