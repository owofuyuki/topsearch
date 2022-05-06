import { useState, useEffect } from "react";
import Circle from "./Circle.js";

const BottomButtons = () => {
    return (
        <div className="BottomButtons">
            <Circle index="fa-solid fa-plus" title="Advanced" />
            <Circle index="fa-solid fa-clock-rotate-left" title="History" />
            <Circle index="fa-solid fa-newspaper" title="News" />
        </div>
    );
};

export default BottomButtons;