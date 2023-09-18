import { Course } from '../entities/course.entity';
import { Enrollment } from '../entities/enrollment.entity';
import { Student } from '../entities/student.entity';
import { IGenericRepository } from './generic-repository-abstracts';

export abstract class IDataServices {
  abstract courses: IGenericRepository<Course>;

  abstract enrollments: IGenericRepository<Enrollment>;

  abstract students: IGenericRepository<Student>;
}
