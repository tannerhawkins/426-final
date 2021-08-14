import { useEffect, useState } from "react";
import axios from "axios";
import getCookie from "./Cookie.js";

let news;
let newsLinks;
let newsAbstracts;

function News() {
    const key = '2R53iX0gPy4uF4HNx8VhyTJ6yNZ9dCT3';
    const [curr, setCurr] = useState(0);
    const [title, setTitle] = useState(null);
    const [link, setLink] = useState(null);
    const [abstract, setAbstract] = useState(null);
    let newNews = null;
    window.addEventListener("load", getNews, {once : true});

    function toggleNews() {
        if(document.getElementById("news").style.display === "block"){
            document.cookie = "news=none"
            document.getElementById("news").style.display = "none";
        } else {
            document.cookie = "news=block"
            document.getElementById("news").style.display = "block";
        }
    }

    document.getElementById("hide_news").onclick = toggleNews;

    function getNext(curr) {
        if (curr + 1 === news.length) {
            setCurr(0);
          return 0;
        }
        else {
            setCurr(curr+1);
          return curr + 1;
        }
      }



    useEffect(() => {
        getNews();
        setTimeout(function nextImage() {
            let thisCurr = getNext(curr);
            setTitle(news[thisCurr]);
            setLink(newsLinks[thisCurr]);
            setAbstract(newsAbstracts[thisCurr]);
          }, 30000)
        document.getElementById("news").style.display = getCookie("news");
    })

    async function getNews(){
        if (news == null && newNews == null) {
            try {
                await axios.get(`https://api.nytimes.com/svc/topstories/v2/us.json?api-key=${key}`).then(result => { 
                    news = result.data.results.map(results => results.title);
                    newsLinks = result.data.results.map(results => results.url);
                    newsAbstracts = result.data.results.map(results => results.abstract);
                    newNews = result.data.results.map(results => results.title);
                    setTitle(result.data.results[0].title);
                    setLink(result.data.results[0].url);
                    setAbstract(result.data.results[0].abstract);
                });
            }
            catch (error) {
                console.log("error");
                console.log(error);
            }
        }
    }
    return (
        <div id="news">
            <h1 id="title"><a href={`${link}`} target="_blank" rel="noreferrer">{title}</a></h1>
            <h4 id="abstract">{abstract}</h4>
        </div>
    );
}

export default News;