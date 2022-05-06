import { useState, useEffect } from "react";
import Language from "./Language.js";
import englishIcon from "../assets/images/english-icon.png";
import vietnameseIcon from "../assets/images/vietnamese-icon.png";

const LanguageSwitch = () => {
    const [currentLanguage, setCurrentLaguage] = useState(true);
    const handleLanguageSwitch = () => {

    };

    return (
        <div className="LanguageSwitch">
            <p className="LanguageTitle">Language : </p>
            <Language index={englishIcon} title="English" />
            <span className="separation"></span>
            <Language index={vietnameseIcon} title="Vietnamese" />
        </div>
    );
};

export default LanguageSwitch;