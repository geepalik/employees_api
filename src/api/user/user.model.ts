import { GetUserByIdDto } from "./dto/get-user-by-id.dto";
import { User } from "./dto/user.schema";

export class UserModel{
    private readonly users: User[] = [{id: '1', name: 'Gil', email: 'gil@mail.gr', role: 'subscriber' }];
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