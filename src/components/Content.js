import { useState, useEffect } from "react";
import Logo from "./Logo.js";
import SearchBox from "./SearchBox.js";
import BottomButtons from "./BottomButtons.js";
import AdvancedFilter from "./AdvancedFilter.js";
// import History from "./History.js";
// import News from "./News.js";
 
const Content = (props) => {
    return (
        <div className="center Content">
            <Logo theme={props.theme} />
            <SearchBox language={props.language} />
            <BottomButtons language={props.language} />
            <AdvancedFilter />
            {/* <History /> */}
            {/* <News /> */}
        </div>
    );
};

export default Content;