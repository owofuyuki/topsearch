import { useState, useEffect } from "react";

const Post = (props) => {
    return (
        <div className="Post">
            <div className="PostDetail">
                <h1 className="PostHeading">Lorem ipsum dolor sit amet, consectetur adip inc</h1>
                <p className="PostDescription">Lorem ipsum dolor sit amet, consectetur adip inc in lorem ipsum dolor sit amet in lorem ipsum dolor sit amet</p> 
            </div>
            <img className="PostImg" src="https://picsum.photos/200/300" />
        </div>
    );
};

export default Post;