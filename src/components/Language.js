import { useState, useEffect } from "react";

const Language = (props) => {
    return (
        <div onClick={props.onClick} className={`Language ${props.title}`}>
            <img className="LanguageIcon" src={props.index} alt={props.title} />
            <p className={`LanguageTitle ${props.focus}`}>{props.title}</p>
        </div>
    );
};

export default Language;