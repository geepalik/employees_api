import { UserRoles, UserStatuses } from "../../../util/consts/UserEnums";

export interface UpdateUserDto {
    userId: number;
    name: string;
    role: UserRoles;
    status: UserStatuses;
}