import { Controller, Get, Param, Post, Put, Body } from '@nestjs/common';
import { CreateStudentDto, FindStudentsResponseDto, StudentResponseDto, UpdateStudentDto } from './dto/student.dto';

@Controller('students')
export class StudentController {
    @Get()
    getStudents(): FindStudentsResponseDto[] {
        return []
    }

    @Get('/:id')
    getStudentById(
        @Param('id') params: { id: string }
    ): FindStudentsResponseDto {
        console.log(params)
        return null
    }

    @Post()
    createStudent(
        @Body() body: CreateStudentDto
    ): StudentResponseDto {
        console.log(body)
        return null
    }

    @Put('/:id')
    updateStudent(
        @Param('id') id,
        @Body() body: UpdateStudentDto
    ) {
        return {body, id}
    }
}