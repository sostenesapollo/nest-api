import { Injectable } from "@nestjs/common";
import { students } from '../db';
import { FindStudentsResponseDto } from "./dto/student.dto";

@Injectable()
export class StudentService {
    private students=students;
    
    getStudents(): FindStudentsResponseDto[] {
        return this.students
    }

    getStudentById(id: string): FindStudentsResponseDto {
        console.log(id, this.students.find(student => student.id === id))
        return this.students.find(student => student.id === id)
    }
}