import './App.css';
import { useEffect, useState } from "react";
import Weather from "./Weather";
import Loader from "./Loader";
import Clock from "./Clock";
import News from "./News";
import Calendar from "./Calendar";

const images = [
  "./images/1.jpg",
  "./images/2.jpg",
  "./images/3.jpg",
  "./images/4.jpg",
]

function getNext(curr){
  if(curr+1 === images.length){
    return 0;
  }
  else {
    return curr+1;
  }
}

function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      vars[key] = value;
  });
  return vars;
}

function App() {
  const [image, setImage] = useState(0);

  setTimeout(function nextImage() {
    setImage(getNext(image));
  }, 10000)

  console.log(getUrlVars());


  return (
    <div className="App" style={{backgroundImage: `url(${images[image]})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover"}}>
      <Weather />
      <Loader/>
      <Clock />
      <News />
      <Calendar />
    </div>
  );
}

export default App;
