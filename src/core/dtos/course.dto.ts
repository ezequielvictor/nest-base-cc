import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCourseDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class UpdateCourseDto extends PartialType(CreateCourseDto) {}
