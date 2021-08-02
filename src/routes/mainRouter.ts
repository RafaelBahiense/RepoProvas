import { Router } from "express";

import { TestsRouter } from "./testsRouter";
import { CategoriesRouter } from "./categoriesRouter";
import { SubjectsRouter } from "./subjectsRouter";
import { ProfessorsRouter } from "./professorsRouter";

const router: Router = Router();

router.use("/", TestsRouter);

router.use("/", CategoriesRouter);

router.use("/", SubjectsRouter);

router.use("/", ProfessorsRouter);

export const MainRouter: Router = router;
