import { Module } from '@nestjs/common';
import { DataServicesModule } from './services/data-services/data-services.module';
import { CourseUseCases } from './use-cases/course/course.use-case';

@Module({
  imports: [DataServicesModule, CourseUseCases],
  controllers: [],
  providers: [],
})
export class AppModule {}
