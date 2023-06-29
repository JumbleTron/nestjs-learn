import { Module } from '@nestjs/common';
import { CourseModule } from './courses/course.module';
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule } from "@nestjs/config";
import configuration from "./config/configuration";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    CourseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
