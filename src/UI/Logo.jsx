import styled from "styled-components";
import { IoBookOutline } from "react-icons/io5";

const StyledLogo = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: center;
  font-weight: 700;
  color: var(--color-grey-700);
  font-size: var(--font-size-base);
`;

function Logo() {
  return (
    <StyledLogo>
      <IoBookOutline size={35} />
      <p>EduPorttt</p>
    </StyledLogo>
  );
}

export default Logo;
