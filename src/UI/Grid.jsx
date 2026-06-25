import styled, { css } from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 0.6rem;

  ${(props) =>
    props.type === "medium" &&
    css`
      gap: 3.6rem;
      padding: 4.8rem 7rem;
    `}
`;
