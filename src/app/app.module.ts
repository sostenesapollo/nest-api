import { Module } from '@nestjs/common';
import { StudentController } from 'src/student/student.controller';
import { TeacherController } from 'src/teacher/teacher.controller';
import { TodosController } from 'src/todos/todos.controller';
import { TodosService } from 'src/todos/todos.service';
import { StudentService } from '../student/student.service';

@Module({
  imports: [],
  controllers: [StudentController, TeacherController, TodosController],
  providers: [StudentService, TodosService],
})
export class AppModule {}
