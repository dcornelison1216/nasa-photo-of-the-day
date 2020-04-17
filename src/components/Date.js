import React from "react";
import styled from "styled-components";

const StyledDate = styled.p`
  font-size: 1.3rem;
  margin-top: 0;
`;

const Date = props => {
  return(
    <StyledDate>Date: {props.date}</StyledDate>
  );
};

export default Date;
