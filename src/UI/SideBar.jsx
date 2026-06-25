import styled from "styled-components";

import SideBarNav from "./SideBarNav";

const StyledSideBar = styled.div`
  grid-row: 1/-1;
  border-right: 1.4px solid var(--color-grey-200);
  height: 100vh;
  position: sticky;
  overflow: hidden;
  background-color: var(--color-grey-50);
`;

function SideBar() {
  return (
    <StyledSideBar>
      <SideBarNav />
    </StyledSideBar>
  );
}

export default SideBar;
