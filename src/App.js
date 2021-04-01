import './App.css';
import { useEffect, useState } from "react";
import Location from "./Location";
import Loader from "./Loader"


const images = [
  "./images/1.jpg",
  "./images/2.jpg",
  "./images/3.jpg",
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
      <Location />
      <Loader/>
    </div>
  );
}

export default App;
