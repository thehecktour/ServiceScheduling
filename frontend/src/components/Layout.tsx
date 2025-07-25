import { Outlet } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";
import styled from "styled-components";

const PageWrapper = styled.div`
  padding-top: 70px;
`;

export default function Layout() {
  return (
    <>
      <HeaderMenu />
      <PageWrapper>
        <Outlet />
      </PageWrapper>
    </>
  );
}
