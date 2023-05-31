import { EmployeeDepartments, EmployeeStatuses } from "../../../util/consts/EmployeeEnums";

export interface Employee {
    id: number;
    name: string;
    dob: string;
    department: EmployeeDepartments
    supervisor: number;
    userId: number;
    email: string;
    status: EmployeeStatuses;
}