import { Module } from '@nestjs/common';
import { DataServicesModule } from './services/data-services/data-services.module';
import { CourseController } from './controllers/course.controller';
import { CourseUseCasesModule } from './use-cases/course/course-use-cases.module';

@Module({
  imports: [DataServicesModule, CourseUseCasesModule],
  controllers: [CourseController],
  providers: [],
})
export class AppModule {}
