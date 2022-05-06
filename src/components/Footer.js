import { useState, useEffect } from "react";
import LanguageSwitch from "./LanguageSwitch.js";
import ModeSwitch from "./ModeSwitch.js";

const Footer = () => {
    return (
        <footer className="Footer">
            <LanguageSwitch />
            <ModeSwitch mode="Light"/>
        </footer>
    );
};

export default Footer;