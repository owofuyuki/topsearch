import { useState, useEffect } from "react";
import Post from "./Post.js";

const News = (props) => {
    const [news, setNews] = useState([]);
    const fetchData = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = res.json();
        setNews(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="News">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
};

export default News;