import styled, { css } from "styled-components";

const Header = styled.h1`
  margin: 2rem 0.5rem 0.1rem 0.5rem;
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 1.6rem; /* ~24px */
      font-weight: 700;
      line-height: 1.3;
      margin: 3rem 0.5rem 0.1rem 0.5rem;
    `}
  ${(props) =>
    props.pos === "h3" &&
    css`
      /* font-weight: 700; */
      font-size: 1.6rem; /* ~24px */

      margin: 4rem 0.5rem 2rem 0.5rem;
    `}
`;

export default Header;
