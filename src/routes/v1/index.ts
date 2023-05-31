import express, {Router} from "express";
import employeeRoutes from "../../api/employee/employee.routes";

const apiV1Router: Router = express.Router();
apiV1Router.use('/api/v1', employeeRoutes);

export default apiV1Router;