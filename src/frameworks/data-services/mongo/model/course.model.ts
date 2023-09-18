import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CourseDocument = Course & Document;

@Schema()
export class Course {
  @Prop({ required: true, unique: true })
  name: string;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
