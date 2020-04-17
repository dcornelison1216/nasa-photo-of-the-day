import React from "react";
import Title from "./Title";
import Explanation from "./Explanation";
import Date from "./Date";
import styled from "styled-components";

const StyledCard = styled.div`
  background: black;
  color: gray;
  width: 75vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  cursor: pointer;
  box-shadow: 0px 1px 6px -2px grey;
  border-radius: 10px;
`;

const NasaImg = styled.img`
  width: 60%;
  border-radius: 10px;
`;

const PhotoCard = props => {
  return (
    <StyledCard>
      <Title title={props.title} />
      <NasaImg alt="space" src={props.imgUrl} />
      <Explanation explanation={props.explanation} />
      <Date date={props.date} />
    </StyledCard>
  );
};

export default PhotoCard;
