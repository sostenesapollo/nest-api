import { Controller, Get, Param, Post, Put, Body } from '@nestjs/common';

@Controller('students')
export class StudentController {
    @Get()
    getStudents() {
        return "All Students"
    }

    @Get('/:id')
    getStudentById(
        @Param('id') params: { id: string }
    ) {
        console.log(params)
        return params
    }

    @Post()
    createStudent(
        @Body() body
    ) {
        console.log(body)
        return body
    }

    @Put('/:id')
    updateStudent() {
        return "Update Student"
    }
}