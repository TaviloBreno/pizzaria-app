import { Router } from "express";
import multer from "multer";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import uploadConfig from "./config/multer";

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"));

const createUserController = new CreateUserController();

router.post(
  "/users",
  new CreateUserController().handle.bind(new CreateUserController())
);

router.post("/login", new AuthUserController().handle.bind(new AuthUserController()));

router.get("/me", isAuthenticated, new AuthUserController().handle.bind(new AuthUserController()));

// Rotas de categorias
router.post("/categories", isAuthenticated, new CreateCategoryController().handle.bind(new CreateCategoryController()));
router.get("/categories", isAuthenticated, new ListCategoryController().handle.bind(new ListCategoryController()));

// Rotas de produtos
router.post("/product", isAuthenticated, upload.single('file'), new CreateProductController().handle.bind(new CreateProductController()));

export { router };