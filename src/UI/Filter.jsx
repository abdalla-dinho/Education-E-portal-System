import styled, { css } from "styled-components";

import { useSearchParams } from "react-router-dom";

import { useForm } from "react-hook-form";

const StyledFilter = styled.form`
  display: flex;

  gap: 2rem;
  padding: 2rem 0;

  ${(props) =>
    props.type === "select" &&
    css`
      gap: 0.8rem;
    `}
`;

const SelectContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  > select {
    border: 1px solid var(--color-grey-100);
    padding: 0.2rem 0.6rem;
    border-radius: 4px;
    color: var(--color-grey-700);
  }
`;

const StyledSelect = styled.select`
  border: 1px solid var(--color-grey-50);
  padding: 0.3rem;
  border-radius: 6px;
  margin-right: 0.3rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-grey-600);
  background-color: var(--color-grey-50);
`;

function Filter({ type, yearOptions, semesterOptions, majorOptions }) {
  const {
    handleSubmit,
    register,
    // formState: { errors },
  } = useForm();

  const [_, setSearchParams] = useSearchParams();
  const onChange = (data) => {
    const { semester, year } = data;

    setSearchParams({ year, semester });
  };

  return (
    <StyledFilter type={type} onChange={handleSubmit(onChange)}>
      {type === "examManagment" && (
        <>
          <SelectContainer>
            <p>Semester</p>
            <select {...register("semester")}>
              {semesterOptions.map((op) => (
                <option key={op.value} value={op.value}>
                  {op.label}
                </option>
              ))}
            </select>
          </SelectContainer>

          <SelectContainer>
            <p>Semester</p>
            <select {...register("major")}>
              {majorOptions.map((op) => (
                <option key={op.value} value={op.value}>
                  {op.label}
                </option>
              ))}
            </select>
          </SelectContainer>
        </>
      )}

      {type === "select" && (
        <>
          <StyledSelect {...register("year")}>
            {yearOptions.map((op) => (
              <option key={op.value} value={op.value}>
                {op.label}
              </option>
            ))}
          </StyledSelect>

          <StyledSelect {...register("semester")}>
            {semesterOptions.map((op) => (
              <option key={op.value} value={op.value}>
                {op.label}
              </option>
            ))}
          </StyledSelect>
        </>
      )}
    </StyledFilter>
  );
}

export default Filter;
