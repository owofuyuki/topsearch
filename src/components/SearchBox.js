import { useState, useEffect } from "react";

const SearchBox = () => {
    return (
        <div className="SearchBox">
            <i className="fa-duotone fa-magnifying-glass SearchIcon SearchIcon-MG" />
            <input type="text" className="SearchInput" placeholder="What are you looking for?" />
            <i className="fa-duotone fa-microphone SearchIcon SearchIcon-MP" />
            <i className="fa-duotone fa-keyboard SearchIcon SearchIcon-KB" />
        </div>
    );
};

export default SearchBox;