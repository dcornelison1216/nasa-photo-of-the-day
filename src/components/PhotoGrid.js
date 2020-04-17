import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";
import styled from "styled-components";

const Container = styled.div`
  background: gray;
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: white;
  box-shadow: 0px 1px 6px -2px grey;
`;

const MarsButton = styled.button`
  width: 150px;
  height: 30px;
  background: black;
  color: gray;
  border: 0;
  margin: 5px 0;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 1.2rem;
  &:hover {
    background: gray;
    color: black;
    ;
  }
`;

const Entry = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default function PhotoGrid() {
  const [photoData, setPhotoData] = useState([]);
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(response => setPhotoData(response.data));
  }, []);
  return (
    <Container>
      <MarsButton>Mars Rover Images</MarsButton>
      <Entry>
        <PhotoCard key={photoData.url} imgUrl={photoData.url} date={photoData.date} title={photoData.title} explanation={photoData.explanation} />
      </Entry>
    </Container>
  );
}
