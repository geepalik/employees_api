import { CustomErrors } from "../../util/CustomErrors";
import { UserRoles, UserStatuses } from "../../util/consts/UserEnums";
import { CreateUserDto } from "./dto/create-user-dto";
import { GetUserByIdDto } from "./dto/get-user-by-id.dto";
import { UpdateUserDto } from "./dto/update-user-dto";
import { User } from "./dto/user.schema";

export class UserModel{
    //initialize default data
    private readonly users: User[] = [{id: 1, name: 'Gil', email: 'gil@mail.gr', role: UserRoles.SUBSCRIBER, status: UserStatuses.ACTIVE }];


    createUser(createUserDto: CreateUserDto){
        const id: number = this.users.length + 1;
        const {name, email, password} = createUserDto;

        //at this point user can be first saved as pending
        //then can make user authenticate account in order to make them active
        //example: create a JWT with name, email and password
        //send them an email to click on a link to activate
        //if clicked on link on time (JWT has lifetime)
        //then we can activate their account, hash the password and create salt with their password 
        //for them to log in later

        const user: User = {
            id,
            name,
            email,
            status: UserStatuses.PENDING,
            role: UserRoles.SUBSCRIBER
        }
        this.users.push(user);
        return user;
    }

    updateUser(updateUserDto: UpdateUserDto): User{
        const {userId, name, role, status} = updateUserDto;
        const existingUserIndex = this.users.findIndex(user => user.id === userId);
        if(existingUserIndex === -1){
            throw new CustomErrors('User not found', `Could not find user with ID: ${userId}`, 400);
        }

        this.users[existingUserIndex].name = name;
        this.users[existingUserIndex].role = role;
        this.users[existingUserIndex].status = status;
        return this.users[existingUserIndex];
    }

    //what can be done in this stage is completely opinionated
    //depending on product use cases
    //in my example, i just delete user from array
    //in an application that runs on production, most likely
    //the user will be needed to have its data stay in database amd change their status to 'deleted'
    //in order to wait for some async actions to happen (e.g. email to confirm user deletion)
    //and not lose data in the meantime
    deleteUser(getUserByIdDto: GetUserByIdDto): string{
        const {userId} = getUserByIdDto;
        const existingUserIndex = this.users.findIndex(user => user.id === userId);
        if(existingUserIndex === -1){
            throw new CustomErrors('User not found', `Could not find user with ID: ${userId}`, 400);
        }
        this.users.splice(existingUserIndex, 1);
        return `User with ID ${userId} was deleted successfully`;
    }

    /**
     * in this version, where the data is stored in an array
     * we return all users
     * if we were working on a real application
     * where users would be a much higher volume of data (e.g. 1M users)
     * I would use pagination
     * by default to return a specific number (e.g. 500)
     * and needed to return more, it would accept an offset and limit (e.g. get rows 501 to 1000)
     * @returns Users[]
     */
    getAllUsers(): User[]{
        return this.users;
    }

    getUserById(getUserByIdDto: GetUserByIdDto): User{
        const {userId} = getUserByIdDto;
        return this.users.filter(user => user.id === userId)[0];
    }
}