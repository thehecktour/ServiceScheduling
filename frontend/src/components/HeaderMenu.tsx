import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch } from "../hooks";
import { logout } from "../features/auth/authSlice";

const Header = styled.header`
  background-color: #282c34;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #61dafb;
  }
`;

const Logo = styled.h1`
  font-size: 20px;
  margin: 0;
`;

export default function HeaderMenu() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/auth");
  };

  return (
    <Header>
      <Logo>Agenda Fácil</Logo>
      <Nav>
        <StyledLink to="/">Serviços</StyledLink>
        <StyledLink to="/agendar">Agendar</StyledLink>
        <StyledLink to="/historico">Histórico</StyledLink>
        <StyledLink to="/admin">Admin</StyledLink>
        <StyledLink to="#" onClick={handleLogout}>
          Sair
        </StyledLink>
      </Nav>
    </Header>
  );
}
