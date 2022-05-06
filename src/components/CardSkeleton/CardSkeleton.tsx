import React from "react";
import styled from "styled-components";

const StyledSkeleton = styled.div`
  height: 240px;
  box-shadow: 0 8px 60px -8px hsl(210, 14%, 80%);
  background: linear-gradient(90deg, hsl(210, 15%, 88%), hsl(210, 15%, 95%), hsl(210, 15%, 88%));
  background-size: 200%;
  border-radius: 10px;
  animation: loader 1s infinite reverse;

  @keyframes loader {
    from {
      background-position: -100% 0;
    }
    to {
      background-position: 100% 0;
    }
  }
`;

const CardSkeleton = () => {
  return <StyledSkeleton></StyledSkeleton>;
};

export default CardSkeleton;
