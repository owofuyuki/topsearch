import { useState, useEffect } from "react";
import TopButton from "./TopButton";

const TopButtons = () => {
    return (
        <div className="TopButtons">
            <TopButton index="" title="FAQ" />
            <TopButton index="" title="Features" />
            <TopButton index="button" title="About Us" />
            <i className="fa-solid fa-bars TopIcon" />
        </div>
    );
};

export default TopButtons;