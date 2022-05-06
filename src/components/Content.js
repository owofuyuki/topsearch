import { useState, useEffect } from "react";
import Logo from "./Logo.js";
import SearchBox from "./SearchBox.js";
import BottomButtons from "./BottomButtons.js";
 
const Content = () => {
    return (
        <div className="center Content">
            <Logo />
            <SearchBox />
            <BottomButtons />
        </div>
    );
};

export default Content;