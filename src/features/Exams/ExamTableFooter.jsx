import calculateGpa from "../../Hooks/calculateGpa";
import Table from "../../UI/Table";

function ExamTableFooter({ exams, currentSem }) {
  const gpa =
    currentSem.reduce((acc, c) => acc + c.Grade_point * c.course.unit, 0) /
    currentSem.reduce((acc, c) => acc + c.course.unit, 0);

  const cgpa =
    exams.reduce((acc, c) => acc + c.Grade_point * c.course.unit, 0) /
    exams.reduce((acc, c) => acc + c.course.unit, 0);

  const currClass = calculateGpa(cgpa);

  return (
    <Table.Footer>
      <p>
        GPA: <span>{gpa.toFixed(2, 0)}</span>
      </p>
      <p>
        CGPA: <span>{cgpa.toFixed(2, 0)}</span>
      </p>
      <p>
        current class: <span>{currClass}</span>
      </p>
    </Table.Footer>
  );
}

export default ExamTableFooter;
