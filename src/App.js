import './App.css';
import { useEffect, useState } from "react";
import Weather from "./Weather";
import Loader from "./Loader";
import Clock from "./Clock";
import News from "./News";

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

function App() {
  const [image, setImage] = useState(0);

  setTimeout(function nextImage() {
    setImage(getNext(image));
  }, 10000)


  return (
    <div className="App" style={{backgroundImage: `url(${images[image]})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover"}}>
      <Weather />
      <Loader/>
      <Clock />
      <News />
    </div>
  );
}

export default App;
