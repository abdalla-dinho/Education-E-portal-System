function getSemester(exams) {
  const semester1 = exams.filter(
    (ex) => ex.semester.year === 1 && ex.semester.semester === 1
  );
  const semester2 = exams.filter(
    (ex) => ex.semester.year === 1 && ex.semester.semester === 2
  );
  const semester3 = exams.filter(
    (ex) => ex.semester.year === 2 && ex.semester.semester === 1
  );
  const semester4 = exams.filter(
    (ex) => ex.semester.year === 2 && ex.semester.semester === 2
  );
  const semester5 = exams.filter(
    (ex) => ex.semester.year === 3 && ex.semester.semester === 1
  );

  const semester6 = exams.filter(
    (ex) => ex.semester.year === 3 && ex.semester.semester === 2
  );

  return { semester1, semester2, semester3, semester4, semester5, semester6 };
}

export default getSemester;
