import styled from "styled-components";

export const StyledDetail = styled.div`
  background-color: #fff;
  padding: 100px;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  text-transform: capitalize;
  img {
    width: 200px;
    height: 200px;
  }
`;

export const StyledInfo = styled.div`
  span {
    font-weight: 600;
    width: 90px;
    display: inline-block;
  }
  p {
    margin-bottom: 10px;
    font-size: 2rem;
  }
`;

export const StyledSkill = styled.div`
  div {
    margin-bottom: 15px;
  }
`;
