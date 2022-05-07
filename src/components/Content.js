import { useList } from 'react-use';
import { useState, useEffect } from "react";
import MyContext from './MyContext.js';
import Logo from "./Logo.js";
import SearchBox from "./SearchBox.js";
import BottomButtons from "./BottomButtons.js";
import AdvancedFilter from "./AdvancedFilter.js";
// import History from "./History.js";
// import News from "./News.js";
 
const Content = (props) => {
    const [list, { push, filter }] = useList([]);
    const [searchWeb, setSearchWeb] = useState('');

    return (
        <MyContext.Provider value={{
            list: list,
            push: push,
            filter: filter,
            searchWeb: searchWeb,
            setSearchWeb: setSearchWeb
        }}>   
            <div className="center Content">
                <Logo theme={props.theme} />
                <SearchBox language={props.language} />
                <BottomButtons language={props.language} />
                <AdvancedFilter />
                {/* <History /> */}
                {/* <News /> */}
            </div>
        </MyContext.Provider>
    );
};

export default Content;