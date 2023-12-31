import express, {NextFunction, Request, Response, Router} from "express";
import { EmployeeController } from "./employee.controller";
import { createEmployeeValidator, updateEmployeeValidator } from "./employee.middleware";
import runValidation from "../../middleware/validators";
import outputHttpRequest from "../../middleware/output";

const employeeRoutes: Router = express.Router();

const employeeController = new EmployeeController();

employeeRoutes.get(
    '/employees', 
    (req: Request, res: Response, next: NextFunction) => {employeeController.getAllEmployees(req, res, next)}, 
    outputHttpRequest
    );
employeeRoutes.get('/employees/:employeeId', (req: Request, res: Response) => {employeeController.getEmployeeById(req, res)});
employeeRoutes.post('/employee', createEmployeeValidator, runValidation, (req: Request, res: Response) => {employeeController.createEmployee(req, res)});
employeeRoutes.put('/employee', updateEmployeeValidator, runValidation, (req: Request, res: Response) => {employeeController.updateEmployee(req, res)});
employeeRoutes.delete('/employee/:employeeId', runValidation, (req: Request, res: Response) => {employeeController.deleteEmployee(req, res)});

export default employeeRoutes;