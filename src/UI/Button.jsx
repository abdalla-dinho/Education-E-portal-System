import styled, { css } from "styled-components";

const StyledButton = styled.button`
  font-size: 1rem;
  background-color: transparent;
  color: var(--color-grey-800);

  ${(props) =>
    props.size === "large" &&
    css`
      font-size: var(--font-size-xs);
      padding: 0.4rem 0.8rem;
      font-weight: 500;
    `}
  ${(props) =>
    props.size === "medium" &&
    css`
      padding: 0.3rem 0.5rem;
      font-weight: 400;
      font-size: 1rem;
    `}
      ${(props) =>
    props.size === "small" &&
    css`
      padding: 0.2rem 0.5rem;
    `}
      
      
      ${(props) =>
    props.variation === "primary" &&
    css`
      /* color: var(--color-grey-50); */
      color: var(--color-brand-50);

      background-color: var(--color-brand-600);
    `}
      
      ${(props) =>
    props.variation === "secondary" &&
    css`
      color: var(--color-brand-400);
      background-color: var(--color-brand-100);

      &:hover {
        background-color: var(--color-brand-200);
      }
    `}
  border: none;

  border-radius: var(--border-radius-sm);
`;

function Button({ children, size, variation, onClick, type }) {
  return (
    <StyledButton
      type={type}
      size={size}
      variation={variation}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
