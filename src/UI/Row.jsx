import styled, { css } from "styled-components";

const StyledRow = styled.div`
  display: flex;
  /* grid-template-columns: 1fr 1fr; */
  gap: 0.6rem;
  align-items: center;

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      align-items: start;
    `}

  ${(props) =>
    props.special === "login" &&
    css`
      align-items: start;
      justify-content: end;
    `}
`;

function Row({ children, type, special }) {
  return (
    <StyledRow type={type} special={special}>
      {children}
    </StyledRow>
  );
}

export default Row;
