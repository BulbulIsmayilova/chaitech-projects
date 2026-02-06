// studentsApi.ts

import { Student } from "@/components/StudentsCardDesktop/types";

export const fetchAcceptedStudentsFromPhotos = async (): Promise<Student[]> => {
  const { mockStudentsData } = await import("@/types/mockStudentsData");

  // UI skeleton / loading davranışını saxlamaq üçün
  await new Promise((resolve) => setTimeout(resolve, 500));

  return mockStudentsData;
};
