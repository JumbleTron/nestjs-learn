import { Body, Controller, Get, HttpCode, Inject, Post, Query } from "@nestjs/common";
import { CoursesService } from "../services/courses.service";
import { CreateCourseDto } from "../dtos/CreateCourse.dto";

@Controller('courses')
export class CoursesController {
  constructor(private courseService: CoursesService) {}

  @Get()
  findAll(@Query('page') page): object {
    return {
      page: parseInt(page),
      per_page: 30,
      total: 1,
      data: [
        {
          id: 1,
          name: 'IPAF 3a',
          location: 'London',
        },
      ],
    };
  }

  @Post()
  @HttpCode(201)
  create(@Body() createDto: CreateCourseDto): object {
    return this.courseService.createCourse(createDto);
  }
}
