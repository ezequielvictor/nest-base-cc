import { Enrollment } from './enrollment.entity';

export class Student {
  firstName: string;
  lastName: string;
  email: string;
  enrollments: Array<Enrollment>;
}
