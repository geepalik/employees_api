import {check} from "express-validator";
import { UserRoles, UserStatuses } from "../../util/consts/UserEnums";

const UserRolesArr: UserRoles[] = Object.values(UserRoles);
const UserStatusesArr: UserStatuses[] = Object.values(UserStatuses);

const createUserValidator = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('Name is required'),
    check('email')
        .isEmail()
        .withMessage('Must be valid email address'),
    check('password')
        .isLength({min:6})
        .withMessage('Password must be at least 6 characters long'),
];

const updateUserValidator = [
    check('userId')
        .not()
        .isEmpty()
        .isNumeric()
        .withMessage('UserId is required'),
    check('name')
        .not()
        .isEmpty()
        .withMessage('Name is required'),
    check('role')
        .not()
        .isEmpty()
        .isIn(UserRolesArr)
        .withMessage(`Role must be in the allowed values: ${UserRolesArr.join(" , ")} `),
    check('status')
        .not()
        .isEmpty()
        .isIn(UserStatusesArr)
        .withMessage(`Status must be in the allowed values: ${UserStatusesArr.join(" , ")} `),
];



export {
    createUserValidator,
    updateUserValidator
}