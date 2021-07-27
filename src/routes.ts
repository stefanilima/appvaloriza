import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentsController } from "./controllers/CreateComplimentsController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentsController = new CreateComplimentsController();

router.post("/users", createUserController.handle);
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", ensureAuthenticated, createComplimentsController.handle);

export { router };