import { Outlet, useLocation } from "react-router";
import styled from "styled-components";
import PageNav from "./PageNav";
import Logo from "./Logo";

const StyledAppLayout = styled.div``;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function AppLayout() {
  const location = useLocation();

  return (
    <StyledAppLayout>
      <Header>
        {!location.pathname.includes("/portal") && (
          <>
            <Logo />
            <PageNav />
          </>
        )}
      </Header>

      <main>
        <Outlet />
      </main>
    </StyledAppLayout>
  );
}

export default AppLayout;
