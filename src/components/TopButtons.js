import { useState, useEffect } from "react";
import TopButton from "./TopButton";

const TopButtons = (props) => {
    return (
        <div className="TopButtons">
            <TopButton index="" title={props.language === "english" ? "FAQ" : "Câu hỏi thường gặp"} />
            <TopButton index="button" title={props.language === "english" ? "Features" : "Tính năng"} />
            <i onClick={props.onClick} className={`fa-duotone ${props.theme === "light" ? "fa-sun" : "fa-moon-stars"} TopIcon`} />
        </div>
    );
};

export default TopButtons;