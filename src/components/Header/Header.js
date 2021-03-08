import styled from "styled-components";

const Navbar = styled.nav`
  max-width: 100%;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid;
  box-shadow: 0 0 15px 0 #0096c7;
`;
const NavCenter = styled.div`
  margin: 0 auto;
`;

const Header = () => {
  return (
    <Navbar>
      <NavCenter>
        <h1>City Weather </h1>
      </NavCenter>
    </Navbar>
  );
};
export default Header;
