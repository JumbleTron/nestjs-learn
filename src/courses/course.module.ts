import { Module } from '@nestjs/common';
import { CoursesController } from './controllers/courses.controller';
import { CoursesService } from './services/courses.service';
import { MongooseModule } from "@nestjs/mongoose";
import { Course, CourseSchema } from "./schemas/course.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Course.name, schema: CourseSchema }]),
  ],
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CourseModule {}
