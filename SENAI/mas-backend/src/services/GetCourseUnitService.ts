import { getRepository } from "typeorm";
import { CourseUnit } from "../models/CourseUnit";

interface UserId{
    id?: string;
}

class GetCourseUnitService{
    public async execute({id}:UserId){
        const courseUnitRepository = getRepository(CourseUnit);
        
        const coursesUnits = courseUnitRepository.findOne({id});

        if(!coursesUnits){
            return{
                message: "courses units not found"
            }
        }
        return coursesUnits;

    }
}
export{GetCourseUnitService}