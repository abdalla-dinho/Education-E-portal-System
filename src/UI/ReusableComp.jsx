import styled, { css } from "styled-components";

export const HeaderSecondary = styled.h4`
  font-size: var(--font-size-lg);
  margin-top: 1.2rem;
  /* padding: 0.6rem; */
  font-weight: bolder;
`;

export const ImageContainer = styled.div`
  /* border: 1px solid var(--color-grey-400); */
  border-radius: var(--border-radius-sm);
  padding: 1rem;
  box-shadow: var(--shadow-md);
  background-color: var(--color-grey-200);
`;

export const HeaderTitle = styled.p`
  font-size: 1rem;
  color: var(--color-grey-700);
  font-family: "Open Sans", sans-serif;

  ${(props) =>
    props.type === "large" &&
    css`
      font-size: var(--font-size-sm);
      padding-top: 0.4rem;
      font-weight: 500;
    `}
`;

export const SubHeader = styled.h4`
  font-size: var(--font-size-xs);
  font-family: var(--font-secondary);
  margin-top: 1.2rem;

  ${(props) =>
    props.type === "secondary" &&
    css`
      font-size: var(--font-size-xs);
      color: var(--color-grey-600);
      font-weight: 500;
      margin-top: 0.8rem;
    `}
`;
