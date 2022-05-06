import styled from "styled-components";
import { ProgressProps } from "../../interface";

export const StyledProgress = styled.div`
  width: 300px;
  height: 10px;
  background-color: #e0e0de;
  border-radius: 8px;
  overflow: hidden;
`;

export const StyledProgressCurrent = styled.div<ProgressProps>`
  width: ${(props) => props.width}%;
  height: 10px;
  background-color: ${(props) => (props.width > 60 ? "#3d6ef7" : "#ff0000")};
`;
