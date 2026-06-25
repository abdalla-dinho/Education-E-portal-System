import styled, { css } from "styled-components";

const FormInput = styled.input`
  padding: 0.7rem 8rem 0.7rem 0.8rem;
  border: 1.5px solid var(--color-grey-300);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-md);
  background-color: var(--color-grey-50);

  ${(props) =>
    props.type === "exams" &&
    css`
      padding: 0.8rem;

      width: 60%;
      text-align: center;
    `}

  &::placeholder {
    color: var(--color-grey-500);
  }
`;

function Input(props) {
  return <FormInput {...props} />;
}

export default Input;
