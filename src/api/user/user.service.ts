import { CustomErrors } from "../../util/CustomErrors";
import { CreateUserDto } from "./dto/create-user-dto";
import { GetUserByIdDto } from "./dto/get-user-by-id.dto";
import { UpdateUserDto } from "./dto/update-user-dto";
import { User } from "./dto/user.schema";
import { UserModel } from "./user.model";

export class UserService {
    userModel: UserModel;

    constructor(){
        this.userModel = new UserModel();
    }

    createUser(createUserDto: CreateUserDto): User{
        return this.userModel.createUser(createUserDto);
    }

    updateUser(updateUserDto: UpdateUserDto): User{
        return this.userModel.updateUser(updateUserDto);
    }

    deleteUser(getUserByIdDto: GetUserByIdDto): string{
        return this.userModel.deleteUser(getUserByIdDto);
    }

    getAllUsers(): User[]{
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