import express, {Router} from "express";
import userRoutes from "../../api/user/user.routes";

const apiV1Router: Router = express.Router();
apiV1Router.use('/api/v1', userRoutes);

export default apiV1Router;