import styled, { css } from "styled-components";

const Button = styled.button`
  width: 50%;
  padding: 0.4rem 0.5rem;
  border-radius: 9px;
  border: none;
  color: var(--color-grey-50);
  font-size: 0.8rem;
  font-weight: 600;

  ${(props) =>
    props.type === "Submitted" &&
    css`
      background-color: #09a947;
    `}

  ${(props) =>
    props.type === "Graded" &&
    css`
      background-color: #85c3f2;
    `}

     ${(props) =>
    props.type === "Pending" &&
    css`
      background-color: #f6de08;
    `}
`;

function AssigmentsRow({ assigment }) {
  const { assignment_title, due_date, status } = assigment;
  const { name: courseName } = assigment.course;

  return (
    <>
      <p>{assignment_title}</p>
      <p>{courseName}</p>
      <p>{due_date}</p>
      <div>
        <Button disabled={true} type={status}>
          {status}
        </Button>
      </div>
    </>
  );
}

export default AssigmentsRow;
