import { EmployeeDepartments, EmployeeStatuses } from "../../../util/consts/EmployeeEnums";

export interface CreateEmployeeDto {
    name: string;
    email: string;
    dob: string;
    department: EmployeeDepartments;
    supervisor: number;
    userId: number;
    status: EmployeeStatuses;
}