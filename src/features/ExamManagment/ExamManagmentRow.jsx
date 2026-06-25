import styled from "styled-components";
import Filter from "../../UI/Filter";
import { Heading } from "../../UI/Heading";

import AssimentManagemntForm from "./AssimentManagemntForm";
import ExamManagmentForm from "./ExamManagmentForm";

const StlyedExamManagmentForm = styled.div`
  padding: 2rem;
`;

function ExamManagmentRow() {
  return (
    <StlyedExamManagmentForm>
      <Filter
        type="examManagment"
        semesterOptions={[
          { label: "1", value: 1 },
          { label: "2", value: 2 },
          { label: "3", value: 3 },
          { label: "4", value: 4 },
          { label: "5", value: 5 },
          { label: "6", value: 6 },
        ]}
        majorOptions={[
          { label: "Computer Science", value: 1 },
          { label: "Public Adminstration", value: 2 },
          { label: "Bank & finances", value: 3 },
        ]}
      />
      <Heading>Create student exam</Heading>
      <ExamManagmentForm />
      <AssimentManagemntForm />
    </StlyedExamManagmentForm>
  );
}

export default ExamManagmentRow;
