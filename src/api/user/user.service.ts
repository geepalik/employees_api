import { CustomErrors } from "../../util/CustomErrors";
import { GetUserByIdDto } from "./dto/get-user-by-id.dto";
import { User } from "./dto/user.schema";
import { UserModel } from "./user.model";

export class UserService {
    userModel: UserModel;

    constructor(){
        this.userModel = new UserModel();
    }

    async getAllUsers(): Promise<User[]>{
        return this.userModel.getAllUsers();
    }

    async getUserById(getUserByIdDto: GetUserByIdDto): Promise<User>{
        const user = await this.userModel.getUserById(getUserByIdDto);
        if(!user){
            throw new CustomErrors('User not found', `Could not find user with ID: ${getUserByIdDto.userId}`, 400);
        }
        return user;
    }
}