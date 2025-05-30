import { Router } from "express";
import multer from "multer";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import uploadConfig from "./config/multer";
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { AddItemController } from "./controllers/order/AddItemController";
import { RemoveItemController } from "./controllers/order/RemoveItemController";
import { SendOrderController } from "./controllers/order/SendOrderController";
import { ListOrderController } from "./controllers/order/ListOrderControllers";

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
router.get("/products", isAuthenticated, new ListByCategoryController().handle.bind(new ListByCategoryController()));

// Rotas de pedidos
router.post("/order", isAuthenticated, new CreateOrderController().handle.bind(new CreateOrderController()));
router.delete("/order", isAuthenticated, new RemoveOrderController().handle.bind(new RemoveOrderController()));

router.post("/order/add", isAuthenticated, new AddItemController().handle.bind(new AddItemController()));

router.delete("/order/remove", isAuthenticated, new RemoveItemController().handle.bind(new RemoveItemController()));

router.put("/order/send", isAuthenticated, new SendOrderController().handle.bind(new SendOrderController()));

router.get("/orders", isAuthenticated, new ListOrderController().handle.bind(new ListOrderController()));

export { router };