import{getRepository} from 'typeorm'
import {CourseUnit} from '../models/CourseUnit'

interface CourseUnitData{
    name:string;
    description:string;
}

class CreateCourseUnitService{
    public async execute({name, description}: CourseUnitData){
        const courseRepository = getRepository(CourseUnit);
        const course = courseRepository.create({
            name,
            description
        });

        await courseRepository.save(course);
        return course;
    }

}
export {CreateCourseUnitService}