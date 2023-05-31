import { UserRoles } from "../../../util/consts/UserEnums";

export interface User {
    id: string;
    name: string;
    email: string;
    hashed_password?: string;
    salt?: string;
    role: string;
}