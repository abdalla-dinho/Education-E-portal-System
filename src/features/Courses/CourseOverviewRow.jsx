function CourseOverviewRow({ course }) {
  const { code, name, instructor, unit } = course;

  return (
    <>
      <p>{code}</p>
      <p>{name}</p>
      <p>{instructor}</p>
      <p>{unit}</p>
    </>
  );
}

export default CourseOverviewRow;
