import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";

export default function PhotoGrid() {
  const [photoData, setPhotoData] = useState([]);
  // useEffect(() => {
  //   axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
  //   .then(response => setPhotoData(response.data));
  // }, []);
  return (
    <div className="container">
        <a href="index.html"><button className="index-button" href="">EPIC Images</button></a>
      <div className="entry">
        <p>Mars rover images</p>
      </div>
    </div>
  );
}
