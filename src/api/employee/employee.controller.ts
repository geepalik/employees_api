import { Request, Response } from "express";
import { BaseController } from "../../base/base.controller";
import { EmployeeService } from "./employee.service";
import { GetEmployeeByIdDto } from "./dto/get-employee-by-id.dto";
import { CreateEmployeeDto } from "./dto/create-employee-dto";
import { UpdateEmployeeDto } from "./dto/update-employee-dto";

export class EmployeeController extends BaseController{
    employeeService: EmployeeService;

    constructor(){
        super();
        this.employeeService = new EmployeeService();
    }

    async createEmployee(req: Request, res: Response){
        try{
            const {name, email, dob, department, supervisor, userId, status} = req.body;
            const createEmployeeDto: CreateEmployeeDto = {name, email, dob, department, supervisor, userId, status};
            const doc = await this.employeeService.createEmployee(createEmployeeDto);
            this.jsonRes(doc, res);
        }catch(e: any){
            this.errRes(e, res, e.message, e.statusCode);
        }
    }

    async updateEmployee(req: Request, res: Response){
        try{
            const {employeeId, name, email, dob, department, supervisor, userId, status} = req.body;
            const updateEmployeeDto: UpdateEmployeeDto = {employeeId, name, email, dob, department, supervisor, userId, status};
            const doc = await this.employeeService.updateEmployee(updateEmployeeDto);
            this.jsonRes(doc, res);
        }catch(e: any){
            this.errRes(e, res, e.message, e.statusCode);
        }
    }

    async deleteEmployee(req: Request, res: Response){
        try{
            const {employeeId} = req.params;
            const getEmployeeByIdDto: GetEmployeeByIdDto = {employeeId: parseInt(employeeId)};
            const doc = await this.employeeService.deleteEmployee(getEmployeeByIdDto);
            this.jsonRes(doc, res);
        }catch(e: any){
            this.errRes(e, res, e.message, e.statusCode);
        }
    }

    async getAllEmployees(req: Request, res: Response){
        try{
            const doc = await this.employeeService.getAllEmployees();
            this.jsonRes(doc, res);
        }catch(e: any){
            this.errRes(e, res, e.message, e.statusCode);
        }
    }

    async getEmployeeById(req: Request, res: Response){
        try{
            const {employeeId} = req.params;
            const getEmployeeByIdDto: GetEmployeeByIdDto = {employeeId: parseInt(employeeId)};
            const doc = await this.employeeService.getEmployeeById(getEmployeeByIdDto);
            this.jsonRes(doc, res);
        }catch(e: any){
            this.errRes(e, res, e.message, e.statusCode);
        }
    }
}