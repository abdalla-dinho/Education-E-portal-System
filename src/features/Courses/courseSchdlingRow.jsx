import ZebraTable from "../../UI/ZebraTable";

function CourseSchdlingRow({ courseSched }) {
  const {
    day,
    duration,
    time,
    course_name: { name },
  } = courseSched;

  return (
    <ZebraTable.Row>
      <p>{day}</p>
      <p>{time}</p>
      <p>{name}</p>
      <p>{duration}</p>
    </ZebraTable.Row>
  );
}

export default CourseSchdlingRow;
