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
    <button className="epic-button" href="">EPIC: Earth Polychromatic Imaging Camera</button>
      <div className="entry">
          <PhotoCard key={photoData.url} imgUrl={photoData.url} date={photoData.date} title={photoData.title} explanation={photoData.explanation} />
      </div>
    </div>
  );
}
