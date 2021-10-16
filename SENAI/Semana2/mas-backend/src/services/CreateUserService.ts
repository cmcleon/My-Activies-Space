import{getRepository} from 'typeorm'
import {User} from '../models/User'
import {hash} from 'bcryptjs'

interface UserData{
    name:string;
    email:string;
    password:string;
}

class CreateUserService{
    public async execute({name, email, password}: UserData){
        const userRepository = getRepository(User);
        const checkUserExists = await  userRepository.findOne({email})
        if(checkUserExists){
            throw new Error('Email adress already exist');
        }

        const hashedPassword = await hash(password, 8);
        const user = {
            name,
            email,
            password: hashedPassword
        }

        await userRepository.save(user);
        return user;
    }

}
export {CreateUserService}