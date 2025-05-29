import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();

router.post("/users", new CreateUserController().handle);

router.post("/login", new AuthUserController().handle);

router.get("/me", isAuthenticated, new AuthUserController().handle);

export { router };