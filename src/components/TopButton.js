import { useState, useEffect } from "react";

const TopButton = (props) => {
    return (
        <button className={`TopButton ${props.index}`}>{props.title}</button>
    );
};

export default TopButton;