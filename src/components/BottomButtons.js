import { useState, useEffect } from "react";
import Circle from "./Circle.js";

const BottomButtons = () => {
    const [show, setShow] = useState(false);
    
    const handleFilter = () => {
        console.log(show);
        if (show) document.querySelector(".AdvancedFilter").style.display = "none";
        else document.querySelector(".AdvancedFilter").style.display = "flex";
        setShow(!show);
    }

    return (
        <div className="BottomButtons">
            <Circle onClick={handleFilter} index="fa-solid fa-plus" title="Advanced" />
            <Circle index="fa-solid fa-clock-rotate-left" title="History" />
            <Circle index="fa-solid fa-newspaper" title="News" />
        </div>
    );
};

export default BottomButtons;