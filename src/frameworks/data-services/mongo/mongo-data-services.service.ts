import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongoGenericRepository } from './mongo-generic-repository';
import {
  Course,
  CourseDocument,
  Enrollment,
  EnrollmentDocument,
  Student,
  StudentDocument,
} from './model';
import { IDataServices } from '../../../core';

@Injectable()
export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap
{
  courses: MongoGenericRepository<Course>;
  enrollments: MongoGenericRepository<Enrollment>;
  students: MongoGenericRepository<Student>;

  constructor(
    @InjectModel(Course.name)
    private CourseRepository: Model<CourseDocument>,
    @InjectModel(Enrollment.name)
    private EnrollmentRepository: Model<EnrollmentDocument>,
    @InjectModel(Student.name)
    private StudentRepository: Model<StudentDocument>,
  ) {}

  onApplicationBootstrap() {
    this.courses = new MongoGenericRepository<Course>(this.CourseRepository);
    this.enrollments = new MongoGenericRepository<Enrollment>(
      this.EnrollmentRepository,
      ['course', 'student'],
    );
    (this.students = new MongoGenericRepository<Student>(
      this.StudentRepository,
    )),
      ['enrollments'];
  }
}
