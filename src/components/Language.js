import { useState, useEffect } from "react";

const Language = (props) => {
    return (
        <div className={`Language ${props.title}`}>
            <img className="LanguageIcon" src={props.index} alt={props.title} />
            <p className="LanguageTitle">{props.title}</p>
        </div>
    );
};

export default Language;