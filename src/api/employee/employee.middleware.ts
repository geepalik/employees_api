import {check} from "express-validator";
import { EmployeeDepartments, EmployeeStatuses } from "../../util/consts/EmployeeEnums";

const EmployeeDepartmentsArr: EmployeeDepartments[] = Object.values(EmployeeDepartments);
const EmployeeStatusesArr: EmployeeStatuses[] = Object.values(EmployeeStatuses);

const createEmployeeValidator = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('Name is required'),
    check('email')
        .isEmail()
        .withMessage('Must be valid email address'),
    check('dob')
        .not()
        .isEmpty()
        .withMessage('Name is required'),
    check('department')
        .not()
        .isEmpty()
        .isIn(EmployeeDepartmentsArr)
        .withMessage(`Department must be in the allowed values: ${EmployeeDepartmentsArr.join(" , ")} `),
    check('supervisor')
        .not()
        .isEmpty()
        .isNumeric()
        .withMessage('Supervisor ID is required'),
    check('userId')
        .not()
        .isEmpty()
        .isNumeric()
        .withMessage('Employee ID is required'),
    check('status')
        .not()
        .isEmpty()
        .isIn(EmployeeStatusesArr)
        .withMessage(`Status must be in the allowed values: ${EmployeeStatusesArr.join(" , ")} `),

];

const updateEmployeeValidator = [
    check('employeeId')
        .not()
        .isEmpty()
        .isNumeric()
        .withMessage('Employee ID is required'),
    check('name')
        .not()
        .isEmpty()
        .withMessage('Name is required'),
    check('email')
        .isEmail()
        .withMessage('Must be valid email address'),
    check('dob')
        .not()
        .isEmpty()
        .withMessage('Name is required'),
    check('department')
        .not()
        .isEmpty()
        .isIn(EmployeeDepartmentsArr)
        .withMessage(`Department must be in the allowed values: ${EmployeeDepartmentsArr.join(" , ")} `),
    check('supervisor')
        .not()
        .isEmpty()
        .isNumeric()
        .withMessage('Supervisor ID is required'),
    check('userId')
        .not()
        .isEmpty()
        .isNumeric()
        .withMessage('Employee ID is required'),
    check('status')
        .not()
        .isEmpty()
        .isIn(EmployeeStatusesArr)
        .withMessage(`Status must be in the allowed values: ${EmployeeStatusesArr.join(" , ")} `),
];



export {
    createEmployeeValidator,
    updateEmployeeValidator
}