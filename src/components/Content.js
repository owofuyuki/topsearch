import { useState, useEffect } from "react";
import Logo from "./Logo.js";
import SearchBox from "./SearchBox.js";
import BottomButtons from "./BottomButtons.js";
import AdvancedFilter from "./AdvancedFilter.js";
// import History from "./History.js";
// import News from "./News.js";
 
const Content = () => {
    return (
        <div className="center Content">
            <Logo />
            <SearchBox />
            <BottomButtons />
            <AdvancedFilter />
            {/* <History /> */}
            {/* <News /> */}
        </div>
    );
};

export default Content;