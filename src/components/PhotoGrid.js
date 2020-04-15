import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";

export default function PhotoGrid() {
  const [photoData, setPhotoData] = useState([]);
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(response => setPhotoData(response.data));
  }, []);
  return (
    <div className="container">
        <a href="mars.html"><button className="mars-button">Mars Rover Images</button></a>
      <div className="entry">
          <PhotoCard key={photoData.url} imgUrl={photoData.url} date={photoData.date} title={photoData.title} explanation={photoData.explanation} />
      </div>
    </div>
  );
}
