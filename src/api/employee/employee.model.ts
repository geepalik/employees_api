import { CustomErrors } from "../../util/CustomErrors";
import { EmployeeStatuses, EmployeeDepartments } from "../../util/consts/EmployeeEnums";
import { CreateEmployeeDto } from "./dto/create-employee-dto";
import { GetEmployeeByIdDto } from "./dto/get-employee-by-id.dto";
import { UpdateEmployeeDto } from "./dto/update-employee-dto";
import { Employee } from "./dto/employee.schema";

export class EmployeeModel{
    //initialize default data
    private readonly employees: Employee[] = [{id: 1, name: 'Gil', email: 'gil@mail.gr', dob: '1995-01-24', department: EmployeeDepartments.ENGINEERING, supervisor: 1, userId: 1, status: EmployeeStatuses.ACTIVE }];


    createEmployee(createEmployeeDto: CreateEmployeeDto){
        const id: number = this.employees.length + 1;
        const {name, email, dob, department, supervisor, userId, status} = createEmployeeDto;

        const employee: Employee = {
            id,
            name, 
            email, 
            dob, 
            department, 
            supervisor, 
            userId, 
            status
        }
        this.employees.push(employee);
        return employee;
    }

    updateEmployee(updateEmployeeDto: UpdateEmployeeDto): Employee{
        const {employeeId, name, email, dob, department, supervisor, userId, status} = updateEmployeeDto;
        const existingEmployeeIndex = this.employees.findIndex(employee => employee.id === employeeId);
        if(existingEmployeeIndex === -1){
            throw new CustomErrors('Employee not found', `Could not find employee with ID: ${employeeId}`, 400);
        }

        this.employees[existingEmployeeIndex].name = name;
        this.employees[existingEmployeeIndex].email = email;
        this.employees[existingEmployeeIndex].dob = dob;
        this.employees[existingEmployeeIndex].department = department;
        this.employees[existingEmployeeIndex].supervisor = supervisor;
        this.employees[existingEmployeeIndex].userId = userId;
        this.employees[existingEmployeeIndex].status = status;
        return this.employees[existingEmployeeIndex];
    }

    //what can be done in this stage is completely opinionated
    //depending on product use cases
    //in my example, i just delete employee from array
    //in an application that runs on production, most likely
    //the employee will be needed to have its data stay in database amd change their status to 'deleted'
    //in order to wait for some async actions to happen (e.g. email to confirm employee deletion)
    //and not lose data in the meantime
    deleteEmployee(getEmployeeByIdDto: GetEmployeeByIdDto): string{
        const {employeeId} = getEmployeeByIdDto;
        const existingEmployeeIndex = this.employees.findIndex(employee => employee.id === employeeId);
        if(existingEmployeeIndex === -1){
            throw new CustomErrors('Employee not found', `Could not find user with ID: ${employeeId}`, 400);
        }
        this.employees.splice(existingEmployeeIndex, 1);
        return `Employee with ID ${employeeId} was deleted successfully`;
    }

    /**
     * in this version, where the data is stored in an array
     * we return all employees
     * if we were working on a real application
     * where employees would be a much higher volume of data (e.g. 1M users)
     * I would use pagination
     * by default to return a specific number (e.g. 500)
     * and needed to return more, it would accept an offset and limit (e.g. get rows 501 to 1000)
     * @returns Employees[]
     */
    getAllEmployees(): Employee[]{
        return this.employees;
    }

    getEmployeeById(getEmployeeByIdDto: GetEmployeeByIdDto): Employee{
        const {employeeId} = getEmployeeByIdDto;
        return this.employees.filter(employee => employee.id === employeeId)[0];
    }
}