import { Router } from 'express';
import { CreateProductController } from './controllers/createControllers/CreateProductController';
import { CreateCategoryController } from './controllers/createControllers/CreateCategoryController';
import { CreateUserController } from './controllers/createControllers/CreateUserController';
import { CreateSuplierController } from './controllers/createControllers/CreateSuplierController';
import { CreateProductCategoryController } from './controllers/createControllers/CreateProductCategoryController';
import { CreateProductWithExistCategory } from './controllers/createControllers/CreateProductWithExistCategoryController';
import { FindProductController } from './controllers/findControllers/FindProductController';
import { FindCategoryController } from './controllers/findControllers/FindCategoryController';

const router = Router();

const createProduct = new CreateProductController();
const createCategory = new CreateCategoryController();
const createUser = new CreateUserController();
const createSuplier = new CreateSuplierController();
const createProductCategory = new CreateProductCategoryController();
const createProductCategoryExist = new CreateProductWithExistCategory();

const findProduct = new FindProductController();
const findCategory = new FindCategoryController();

router.post("/product", createProduct.handle);
router.post("/category", createCategory.handle);
router.post("/user", createUser.handle);
router.post("/suplier", createSuplier.handle);
router.post("/productCategory", createProductCategory.handle)
router.post("/productWithCategory", createProductCategoryExist.handle)

router.get("/product/:id", findProduct.handle)
router.get("/category/:id", findCategory.handle)


export { router };