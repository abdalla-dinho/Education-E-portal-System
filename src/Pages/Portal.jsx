import { Outlet } from "react-router";
import AppNav from "../UI/AppNav";
import SideBar from "../UI/SideBar";
import styled from "styled-components";

const StyledPortal = styled.div`
  display: grid;
  grid-template-columns: 18rem 1fr 1fr;
  grid-template-rows: 4rem auto auto;
  /* column-gap: 3.6rem; */
  padding: 0;
`;

const Main = styled.main`
  grid-column: 2/-1;
  grid-row: 2/-1;
  padding: 1rem 1rem 8rem 1rem;
  background-color: var(--color-grey-100);
  height: 100vh;
  overflow-y: scroll;
`;

function Portal() {
  return (
    <StyledPortal>
      <AppNav />
      <SideBar />

      <Main>
        <Outlet />
      </Main>
    </StyledPortal>
  );
}

export default Portal;
