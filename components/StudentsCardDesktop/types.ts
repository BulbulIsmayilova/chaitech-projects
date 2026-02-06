export interface Student {
  id: string | number;
  name: string
  major: string
  location: string
  testimonial: string
  email: string
  image: string
}

export interface StudentsCardMobileProps {
  studentsData: Student[];
}