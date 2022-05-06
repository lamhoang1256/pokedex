import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.div`
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 3rem;
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Link to='/'>Pokedex</Link>
    </StyledHeader>
  );
};

export default Header;
