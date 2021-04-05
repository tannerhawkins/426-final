import { useEffect, useState } from "react";
import axios from "axios";


function News() {
    const key = '2R53iX0gPy4uF4HNx8VhyTJ6yNZ9dCT3';
    const call = `https://api.nytimes.com/svc/topstories/v2/us.json?api-key=${key}`;
    const [news, setNews] = useState(null);
    let newNews = null;
    window.addEventListener("load", getNews, {once : true});

    async function getNews(){
        if (news == null && newNews == null) {
            try {
                await axios.get(`https://api.nytimes.com/svc/topstories/v2/us.json?api-key=${key}`).then(result => { setNews(result); newNews = result;});
            }
            catch (error) {
                console.log("error");
                console.log(error);
            }
        }
    }
    return (
        <div id="news"></div>
    );
}

export default News;