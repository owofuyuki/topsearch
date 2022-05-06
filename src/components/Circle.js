import { useState, useEffect } from "react";

const Circle = (props) => {
    return (
        <div className="center">
            <div className="center CircleButton">
                <i className={`${props.index} CircleIcon`} />
            </div>
            <p className="ButtonTitle">{props.title}</p>
        </div>
    );
};

export default Circle;