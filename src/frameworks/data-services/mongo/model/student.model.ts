import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Enrollment } from './enrollment.model';

export type StudentDocument = Student & Document;

@Schema()
export class Student {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  email: string;

  @Prop({ type: Array<Enrollment>, ref: 'Enrollment' })
  enrollments: Array<Enrollment>;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
