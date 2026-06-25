import styled from "styled-components";
import Button from "../UI/Button";
import { FiLogOut } from "react-icons/fi";
import { useLogout } from "../features/Authentication/useLogout";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useDarkMode } from "../Context/DarkModeContext";

const StyledAppNav = styled.div`
  grid-column: 2/-1;
  border-bottom: 1.4px solid var(--color-grey-200);

  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 2rem 0;
  background-color: var(--color-grey-50);
  border-bottom: 1.6px solid var(--color-grey-200);

  > div {
    display: flex;
    margin-right: 2rem;
    align-items: center;
    gap: 1rem;
    > button {
      display: flex;
      padding: 0.6rem 1rem;
      align-items: center;
      gap: 0.3rem;
    }
  }
`;

function AppNav() {
  const { logout, isUpdating: isLoginout } = useLogout();
  const { isDarkMode, onToggleDarkMode } = useDarkMode();

  return (
    <StyledAppNav>
      <div>
        <Button size="large" onClick={() => onToggleDarkMode()}>
          {isDarkMode ? (
            <MdDarkMode color="#5757b1" size={26} />
          ) : (
            <MdLightMode color="#5757b1" size={24} />
          )}
        </Button>

        <Button
          size="medium"
          variation="primary"
          disabled={isLoginout}
          onClick={logout}
        >
          logout
          <FiLogOut />
        </Button>
      </div>
    </StyledAppNav>
  );
}

export default AppNav;
