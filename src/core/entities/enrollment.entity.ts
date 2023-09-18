import { Course } from './course.entity';
import { Student } from './student.entity';

export class Enrollment {
  course: Course;
  grade: number;
  student: Student;
}
