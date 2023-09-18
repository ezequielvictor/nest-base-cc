import { Module } from '@nestjs/common';
import { CourseFactoryService } from './course-factory.service';
import { DataServicesModule } from 'src/services/data-services/data-services.module';
import { CourseUseCases } from './course.use-case';

@Module({
  imports: [DataServicesModule],
  providers: [CourseFactoryService, CourseUseCases],
  exports: [CourseFactoryService, CourseUseCases],
})
export class CourseMoule {}
