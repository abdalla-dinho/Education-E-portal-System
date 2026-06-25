import { supabase } from "../../supabase";
import { getStudent } from "./authApi";

export async function getExams() {
  const studentData = await getStudent();

  const { major_id, id } = studentData;

  let { data: Exams, error } = await supabase
    .from("Exams")
    .select(
      "*,course(name,code,unit),semester:semester_id!inner(year,semester)"
    )
    .eq("major_id", major_id)
    .eq("student_id", id);

  if (error) throw new Error(error.message);

  return Exams;
}

export async function getExamCourses(semester, major) {
  let { data: courses, error } = await supabase
    .from("Courses")
    .select("*")
    .eq("semester_id", semester)
    .eq("major_id", major);

  if (error) throw new Error(error.message);

  return courses;
}

export async function addExams(exams) {
  const { data, error } = await supabase.from("Exams").insert(exams).select();

  if (error) throw new Error(error.message);

  return data;
}
