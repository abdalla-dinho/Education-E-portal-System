import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useUser } from "../features/Authentication/useUser";

const StyledPageNav = styled.ul`
  display: flex;
  gap: 1.6rem;
  align-items: center;
`;

const List = styled.li`
  font-family: var(--font-secondary);
  font-size: 1rem;
  color: var(--color-grey-600);

  &:hover {
    color: var(--color-grey-600);
    cursor: pointer;
  }
`;

function PageNav() {
  const { user } = useUser();

  return (
    <StyledPageNav>
      <List>Courses</List>

      <Button size="large" variation="primary">
        {user ? (
          <Link to="portal">dashboard</Link>
        ) : (
          <Link to="Login">Login</Link>
        )}
      </Button>
      <List as={Link} to="home">
        Home
      </List>
    </StyledPageNav>
  );
}

export default PageNav;
