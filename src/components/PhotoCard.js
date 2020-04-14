import React from "react";
import Title from "./Title";
import Explanation from "./Explanation";
import Date from "./Date";

const PhotoCard = props => {
  return (
    <div className="photo-card">
      <Title title={props.title} />
      <img className="nasa-image" alt="space" src={props.imgUrl} />
      <Explanation explanation={props.explanation} />
      <Date date={props.date} />
    </div>
  );
};

export default PhotoCard;
