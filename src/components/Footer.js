import { useState, useEffect } from "react";
import LanguageSwitch from "./LanguageSwitch.js";

const Footer = (props) => {
    return (
        <footer className="Footer">
            <LanguageSwitch language={props.language} onClick1={props.onClick1} onClick2={props.onClick2} />
            <p class="FooterCopyright">{props.language === "english" ? "© 2022 topSearch. All Rights Reserved." : "© Bản quyền thuộc về topSearch 2022."}</p>
        </footer>
    );
};

export default Footer;