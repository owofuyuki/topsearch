import { useState, useEffect } from "react";

const Circle = (props) => {
    return (
        <div className="CircleButton">
            <i className={props.index} />
        </div>
    );
};

export default Circle;