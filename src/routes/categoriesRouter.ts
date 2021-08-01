import { Router } from "express";

import * as categoriesController from "../controllers/categoriesController";

const router: Router = Router();

router.get("/category", categoriesController.getAll);

export const CategoriesRouter: Router = router;
