import { Router } from "express";

import * as subjects from "../controllers/subjectsController";

const router: Router = Router();

router.get("/subjects", subjects.getAll);

router.get("/subjects/tests", subjects.getAllWithCount);

export const SubjectsRouter: Router = router;
