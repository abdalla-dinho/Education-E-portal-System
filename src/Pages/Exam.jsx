import ExamTable from "../features/Exams/ExamTable";
import { useExam } from "../features/Exams/useExams";
import Filter from "../UI/Filter";

// import Select from "../UI/Select";
import SpinnerFull from "../UI/SpinnerFull";

function Exam() {
  const { isLoading } = useExam();

  if (isLoading) return <SpinnerFull />;
  return (
    <>
      <Filter
        type="select"
        yearOptions={[
          { label: "1", value: 1 },
          { label: "2", value: 2 },
          { label: "3", value: 3 },
        ]}
        semesterOptions={[
          { label: "1", value: 1 },
          { label: "2", value: 2 },
        ]}
      />
      <ExamTable />
    </>
  );
}

export default Exam;
