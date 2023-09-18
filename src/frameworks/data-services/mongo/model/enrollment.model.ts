import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Course } from './course.model';
import { Student } from './student.model';

export type EnrollmentDocument = Enrollment & Document;

@Schema()
export class Enrollment {
  @Prop({ required: true })
  grade: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true })
  course: Course;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
  })
  student: Student;
}

export const EnrollmentSchema = SchemaFactory.createForClass(Enrollment);
