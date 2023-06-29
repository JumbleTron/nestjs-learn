import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Course } from "../schemas/course.schema";
import { Model } from "mongoose";
import { CreateCourseDto } from "../dtos/CreateCourse.dto";

@Injectable()
export class CoursesService {
  constructor(@InjectModel(Course.name) private courseModel: Model<Course>) {}

  async createCourse(createCourseDto: CreateCourseDto): Promise<Course> {
    const createdCourse = new this.courseModel(createCourseDto);
    return createdCourse.save();
  }
}
