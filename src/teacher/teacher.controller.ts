import { Controller, Get, Param, Post, Put, Body } from '@nestjs/common';

@Controller('teachers')
export class TeacherController {
    @Get()
    getTea() {
        return "All Teachers"
    }

    @Get('/:id')
    getTeacherById(
        @Param('id') params: { id: string }
    ) {
        console.log(params)
        return params
    }

    @Post()
    createTeacher(
        @Body() body
    ) {
        console.log(body)
        return body
    }

    @Put('/:id')
    updateStudentTeacher(
        @Param('teacherId') teacherId: string,
        @Param('studentId') studentId: string,
        @Body() body
    ) {
        return {teacherId, studentId, body}
    }
}