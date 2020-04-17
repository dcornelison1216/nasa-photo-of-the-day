import React from "react";
import styled from "styled-components";

const DescriptionP = styled.p`
  padding: 0 2rem;
`;

const Explanation = props => {
  return(
    <DescriptionP>Description: {props.explanation}</DescriptionP>
    // <p className="explanation">Description: {props.explanation}</p>
  );
};

export default Explanation;
