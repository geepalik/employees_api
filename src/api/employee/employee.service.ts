import { CustomErrors } from "../../util/CustomErrors";
import { CreateEmployeeDto } from "./dto/create-employee-dto";
import { GetEmployeeByIdDto } from "./dto/get-employee-by-id.dto";
import { UpdateEmployeeDto } from "./dto/update-employee-dto";
import { Employee } from "./dto/employee.schema";
import { EmployeeModel } from "./employee.model";

export class EmployeeService {
    employeeModel: EmployeeModel;

    constructor(){
        this.employeeModel = new EmployeeModel();
    }

    createEmployee(createEmployeeDto: CreateEmployeeDto): Employee{
        return this.employeeModel.createEmployee(createEmployeeDto);
    }

    updateEmployee(updateEmployeeDto: UpdateEmployeeDto): Employee{
        return this.employeeModel.updateEmployee(updateEmployeeDto);
    }

    deleteEmployee(getEmployeeByIdDto: GetEmployeeByIdDto): string{
        return this.employeeModel.deleteEmployee(getEmployeeByIdDto);
    }

    getAllEmployees(): Employee[]{
        return this.employeeModel.getAllEmployees();
    }

    async getEmployeeById(getEmployeeByIdDto: GetEmployeeByIdDto): Promise<Employee>{
        const employee = await this.employeeModel.getEmployeeById(getEmployeeByIdDto);
        if(!employee){
            throw new CustomErrors('Employee not found', `Could not find employee with ID: ${getEmployeeByIdDto.employeeId}`, 400);
        }
        return employee;
    }
}