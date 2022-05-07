import { useState, useEffect } from "react";
import LanguageSwitch from "./LanguageSwitch.js";

const Footer = () => {
    return (
        <footer className="Footer">
            <LanguageSwitch />
            <p class="FooterCopyright">© 2022 topSearch. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;