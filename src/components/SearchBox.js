import { useState, useRef, useEffect } from "react";
import { useSpeechRecognition } from "react-speech-kit";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import MyContext from './MyContext.js';
import { useContext } from 'react';
import { useBoolean } from '@chakra-ui/react';

const SearchBox = (props) => {
    const [input, setInput] = useState("");
    const [layout, setLayout] = useState("default");
    const keyboard = useRef();

    const { listen, listening, stop } = useSpeechRecognition({
        onResult: (result) => {
            setInput(result);
        }
    });

    const [show, setShow] = useState(false);

    const searchInput = useRef(null);

    const onChange = input => {
        setInput(input);
        console.log("Input changed", input);
    };

    const handleShift = () => {
        const newLayoutName = layout === "default" ? "shift" : "default";
        setLayout(newLayoutName);
    };

    const onKeyPress = button => {
        console.log("Button pressed", button);
        if (button === "{shift}" || button === "{lock}") handleShift();
    };

    const onChangeInput = event => {
        const input = event.target.value;
        setInput(input);
        keyboard.current.setInput(input);
    };

    const handleMicrophone = () => {
        if (!listening) {
            listen();
            console.log("Listening");
        }
        else {
            console.log("Stop listening");
            stop();
        }
    };

    const handleKeyboard = () => {
        console.log(show);
        if (show) document.querySelector(".simple-keyboard").classList.remove("show");
        else document.querySelector(".simple-keyboard").classList.add("show");
        setShow(!show);
    };

    const myCtx = useContext(MyContext);
    const [toggle, setToggle] = useBoolean();

    const handleSubmit = (event) => {
        event.preventDefault();
        let defaultURL = myCtx.searchWeb
    
        if (defaultURL !== '') {
            defaultURL += input;
            window.open(defaultURL);
        } 
        else {
            let defaultURL = `https://google.com/search?q=${
                toggle ? `"${input}"` : input
            }`;
            if (myCtx.list.length > 0) {
                myCtx.list.forEach((link, i) => {
                    defaultURL += `${i > 0 ? ' OR+' : ''} site%3A${link}`;
                });
                window.open(defaultURL);
            } 
            else {
                window.open(defaultURL);
            };
        };
        setInput("");
      };

    return (
        <form className="SearchBox" onSubmit={handleSubmit}>
            <i onClick={() => {searchInput.current.focus()}} className="fa-duotone fa-magnifying-glass SearchIcon SearchIcon-MG" />
            <form></form>
            <input 
                type="text"
                className="SearchInput"
                placeholder={props.language === "english" ? "What are you looking for?" : "Nh???p n???i dung c???n t??m ki???m"}
                ref={searchInput}
                value={input}
                onChange={onChangeInput}
            />
            <i onClick={handleMicrophone} className="fa-duotone fa-microphone SearchIcon SearchIcon-MP" />
            <i onClick={handleKeyboard} className="fa-duotone fa-keyboard SearchIcon SearchIcon-KB" />
            <Keyboard
                keyboardRef={r => (keyboard.current = r)}
                layoutName={layout}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
        </form>
    );
};

export default SearchBox;