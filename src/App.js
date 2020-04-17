import React from "react";
import "./App.css";
import PhotoGrid from "./components/PhotoGrid";
import styled from "styled-components";

const StyledApp = styled.div`
  font-family: sans-serif;
  text-align: left;
`;

function App() {
  return (
    <StyledApp>
      <PhotoGrid />
    </StyledApp>
  );
}

export default App;
