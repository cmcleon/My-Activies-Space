import{getRepository} from 'typeorm'
import { ExclusionMetadata } from 'typeorm/metadata/ExclusionMetadata';
import {Activy} from '../models/Activy'

interface ActivyData{
    name:string;
    activy_date:string;
    grade: number;
    courseUnitId:string;
}

class CreateActivyService{
    public async execute(data: ActivyData){
        const {name, activy_date, grade, courseUnitId} = data;
        const activyRepository = getRepository(Activy);
        const checkActivyToCourseExists = await activyRepository.findOne({name, courseUnitId});

        if (checkActivyToCourseExists){
            return{
                error: "Activy to Course Unit already exist."
            }
        }
        
        const activy = activyRepository.create({
            name,
            activy_date,
            grade,
            courseUnitId
        });

        await activyRepository.save(activy);
        return activy;
    }

}
export {CreateActivyService};