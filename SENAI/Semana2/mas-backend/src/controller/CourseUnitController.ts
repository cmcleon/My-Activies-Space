import {Request, Response} from 'express'
import {CreateCourseUnitService} from '../services/CreateCourseUnitService'


class CourseUnitController{
    async create (request:Request, response:Response){
        const courseData = request.body

        const createCourseUnitService = new CreateCourseUnitService()

        const user = await createCourseUnitService.execute(courseData);

        return response.json(courseData);
    } 
}

export {CourseUnitController}