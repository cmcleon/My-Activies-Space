import { getRepository } from "typeorm";
import { User } from "../models/User";

interface UserId{
    id?: string;
}

class GetUserService{
    public async execute({id}:UserId){
        const usersRepository = getRepository(User);
        
        const users = usersRepository.find();

        if(!users){
            return{
                message: "user not found"
            }
        }
        return users;
    }
}
export{GetUserService}