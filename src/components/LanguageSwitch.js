import { useState, useEffect } from "react";
import Language from "./Language.js";
import englishIcon from "../assets/images/english-icon.png";
import vietnameseIcon from "../assets/images/vietnamese-icon.png";

const LanguageSwitch = (props) => {
    return (
        <div className="LanguageSwitch">
            <p className="LanguageTitle">{props.language === "english" ? "Language : " : "Ngôn ngữ : "}</p>
            <Language focus={props.language === "english" ? "focus" : ""} onClick={props.onClick1} index={englishIcon} title={props.language === "english" ? "English" : "Tiếng Anh"} />
            <span className="separation"></span>
            <Language focus={props.language === "vietnamese" ? "focus" : ""} onClick={props.onClick2} index={vietnameseIcon} title={props.language === "english" ? "Vietnamese" : "Tiếng Việt"} />
        </div>
    );
};

export default LanguageSwitch;