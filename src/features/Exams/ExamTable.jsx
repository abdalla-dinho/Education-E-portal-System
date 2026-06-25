import Header from "../../UI/Header";
import Table from "../../UI/Table";
import ExamTableFooter from "./ExamTableFooter";
import ExamTableRow from "./ExamTableRow";
import { useExam } from "./useExams";

import { ErrorMessage } from "../../UI/ErrorMessage";
import { userUrl } from "../../Hooks/useUrl";

function ExamTable() {
  const { exams } = useExam();
  const { year, semester } = userUrl();

  const filteredExams = exams.filter(
    (exams) =>
      exams.semester.year === year && exams.semester.semester === semester
  );

  return (
    <div>
      <Header as="h2">Exam Results</Header>
      <Table columns="1fr 3fr 2.2fr 0.7fr 0.7fr 0.8fr">
        <Table.Header>
          <p>Code</p>
          <p>Course</p>
          <p>academic year</p>
          <p>Marks </p>
          <p>Grade </p>
          <p>GP </p>
        </Table.Header>

        {!filteredExams.length && (
          <ErrorMessage>No data is availabe to show at the moment</ErrorMessage>
        )}

        {filteredExams.map((exam) => (
          <>
            <ExamTableRow exams={exam} key={exam.id} />
          </>
        ))}

        <ExamTableFooter exams={exams} currentSem={filteredExams} />
      </Table>
    </div>
  );
}

export default ExamTable;
