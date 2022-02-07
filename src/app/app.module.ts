import { Module } from '@nestjs/common';
import { StudentController } from 'src/student/student.controller';
import { TeacherController } from 'src/teacher/teacher.controller';
import { StudentService } from '../student/student.service';

@Module({
  imports: [],
  controllers: [StudentController, TeacherController],
  providers: [StudentService]
})
export class AppModule {}
