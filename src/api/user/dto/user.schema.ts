import { UserRoles, UserStatuses } from "../../../util/consts/UserEnums";

export interface User {
    id: number;
    name: string;
    email: string;
    hashed_password?: string;
    salt?: string;
    role: UserRoles;
    status: UserStatuses;
}