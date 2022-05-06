import { useState, useEffect } from "react";

const ModeSwitch = (props) => {
    return (
        <div className="ModeSwitch">
            <p className="ModeTitle">{`${props.mode} Mode`}</p>
            <label className="ModeSlideContainer">
                <input type="checkbox" className="ModeCheckbox" />
                <span className="ModeSlide"></span>
            </label>
        </div>
    );
};

export default ModeSwitch;