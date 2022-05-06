import styled from "styled-components";
import { createBackgroundCard } from "../../backgrounds";

export const StyledCard = styled.div`
  padding: 20px 10px;
  min-height: 240px;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  img {
    background-color: #fff;
    border-radius: 100rem;
  }
  h3 {
    text-transform: capitalize;
  }
  ${createBackgroundCard()}
`;
