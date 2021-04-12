import { useEffect, useState } from "react";
import axios from "axios";

let news;

function News() {
    const key = '2R53iX0gPy4uF4HNx8VhyTJ6yNZ9dCT3';
    const call = `https://api.nytimes.com/svc/topstories/v2/us.json?api-key=${key}`;
    const [curr, setCurr] = useState(0);
    const [title, setTitle] = useState(null);
    let newNews = null;
    window.addEventListener("load", getNews, {once : true});

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

      setTimeout(function nextImage() {
        setTitle(news[getNext(curr)]);
      }, 30000)


    useEffect(() => {
        getNews()
    })

    async function getNews(){
        if (news == null && newNews == null) {
            try {
                await axios.get(`https://api.nytimes.com/svc/topstories/v2/us.json?api-key=${key}`).then(result => { 
                    news = result.data.results.map(results => results.title);
                    newNews = result.data.results.map(results => results.title); 
                    setTitle(newNews[0]);
                });
            }
            catch (error) {
                console.log("error");
                console.log(error);
            }
        }
    }
    return (
        <div id="news">{title}</div>
    );
}

export default News;