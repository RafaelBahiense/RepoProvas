import { Router } from "express";

import * as subjects from "../controllers/subjectsController";

const router: Router = Router();

router.get("/subjects", subjects.getAll);

export const SubjectsRouter: Router = router;
