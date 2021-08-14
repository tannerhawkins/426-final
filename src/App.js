import './App.css';
import { useEffect, useState } from "react";
import Weather from "./Weather";
import Loader from "./Loader";
import Clock from "./Clock";
import News from "./News";
import Week from "./Week";

const images = [
  "./images/1.jpg",
  "./images/2.jpg",
  "./images/3.jpg",
  "./images/4.jpg",
]

function getNext(curr) {
  if (curr + 1 === images.length) {
    return 0;
  }
  else {
    return curr + 1;
  }
}

function App() {

  const [image, setImage] = useState(0);

  useEffect(() => {
    setTimeout(function nextImage() {
      setImage(getNext(image));
      //document.body.style.backgroundImage = `url(${images[image]})`;
    }, 60000)

  });

  document.body.style.backgroundImage = `url(${images[image]})`;
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";

  return (
    <div id="App" className="App">
      <div id="clockWeather">
        <div id="clock">
          <Clock />
        </div>
        <div id="weather">
          <Loader />
          <Weather />
        </div>
      </div>
      <News />
      <Week />
    </div>
  );
}

export default App;
