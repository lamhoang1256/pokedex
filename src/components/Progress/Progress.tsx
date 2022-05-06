import React from "react";
import { StyledProgress, StyledProgressCurrent } from "./Progress.style";
import { ProgressProps } from "../../interface";

const Progress: React.FC<ProgressProps> = ({ width }) => {
  return (
    <StyledProgress>
      <StyledProgressCurrent width={width}></StyledProgressCurrent>
    </StyledProgress>
  );
};

export default Progress;
