import { Injectable } from '@nestjs/common';
import { IDataServices } from '../../core/abstracts';
import { CreateCourseDto, UpdateCourseDto } from '../../core/dtos';
import { CourseFactoryService } from './course-factory.service';
import { Course } from 'src/core/entities';

@Injectable()
export class CourseUseCases {
  constructor(
    private dataServices: IDataServices,
    private courseFactoryService: CourseFactoryService,
  ) {}

  getAllCourses(): Promise<Array<Course>> {
    return this.dataServices.courses.getAll();
  }

  getCourseById(id: any): Promise<Course> {
    return this.dataServices.courses.get(id);
  }

  createCourse(createCourseDto: CreateCourseDto): Promise<Course> {
    const genre = this.courseFactoryService.createNewCourse(createCourseDto);
    return this.dataServices.courses.create(genre);
  }

  updateCourse(
    courseId: string,
    updateCourseDto: UpdateCourseDto,
  ): Promise<Course> {
    const course = this.courseFactoryService.updateCourse(updateCourseDto);
    return this.dataServices.courses.update(courseId, course);
  }
}
