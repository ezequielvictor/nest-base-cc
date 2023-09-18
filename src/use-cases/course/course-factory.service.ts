import { Injectable } from '@nestjs/common';
import { CreateCourseDto, UpdateCourseDto } from '../../core/dtos';
import { Course } from '../../core/entities';

@Injectable()
export class CourseFactoryService {
  createNewCourse(createCourseDto: CreateCourseDto) {
    const newCourse = new Course();
    newCourse.name = createCourseDto.name;

    return newCourse;
  }

  updateCourse(updateCourseDto: UpdateCourseDto) {
    const newCourse = new Course();
    newCourse.name = updateCourseDto.name;

    return newCourse;
  }
}
