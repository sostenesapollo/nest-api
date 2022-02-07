import { Injectable } from "@nestjs/common";
import { students } from '../db';

@Injectable()
export class StudentService {
    private students=students;
    
    getStudents() {
        return this.students
    }
}