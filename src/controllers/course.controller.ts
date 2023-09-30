import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateCourseDto, UpdateCourseDto } from 'src/core/dtos';
import { CourseUseCases } from 'src/use-cases/course/course.use-case';

@Controller('api/course')
export class CourseController {
  constructor(private courseUseCases: CourseUseCases) {}

  @Get()
  async getAll() {
    return this.courseUseCases.getAllCourses();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.courseUseCases.getCourseById(id);
  }

  @Post()
  createCourse(@Body() courseDto: CreateCourseDto) {
    return this.courseUseCases.createCourse(courseDto);
  }

  @Put(':id')
  updateCourse(
    @Param('id') courseId: string,
    @Body() updateCourse: UpdateCourseDto,
  ) {
    return this.courseUseCases.updateCourse(courseId, updateCourse);
  }
}
