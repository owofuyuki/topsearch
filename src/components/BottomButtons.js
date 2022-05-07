import { useState, useEffect } from "react";
import Circle from "./Circle.js";

const BottomButtons = (props) => {
    const [show, setShow] = useState(false);
    
    const handleFilter = () => {
        console.log(show);
        if (show) document.querySelector(".AdvancedFilter").style.display = "none";
        else document.querySelector(".AdvancedFilter").style.display = "flex";
        setShow(!show);
    }

    return (
        <div className="BottomButtons">
            <Circle onClick={handleFilter} index="fa-solid fa-plus" title={props.language === "english" ? "Advanced" : "Nâng cao"} />
            <Circle index="fa-solid fa-clock-rotate-left" title={props.language === "english" ? "History" : "Lịch sử"} />
            <Circle index="fa-solid fa-newspaper" title={props.language === "english" ? "News" : "Tin tức"} />
        </div>
    );
};

export default BottomButtons;