import { supabase } from "../../supabase";
import { getStudent } from "./authApi";

export async function getStudentStatement() {
  const studentData = await getStudent();

  const { major_id, semester_id } = studentData;

  console.log(major_id);

  let { data: fees_structure_view, error } = await supabase
    .from("fees_structure_view")
    .select("*");

  if (error) throw new Error(error.message);

  console.log(fees_structure_view);

  return fees_structure_view;
}

export async function getPayments() {
  const studentData = await getStudent();

  const { id } = studentData;

  let { data: payments, error } = await supabase
    .from("payments")
    .select("*")
    .eq("student_id", id);

  if (error) throw new Error(error);

  return payments;
}
