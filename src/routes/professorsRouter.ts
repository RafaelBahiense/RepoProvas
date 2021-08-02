import { Router } from "express";

import * as professors from "../controllers/professorsController";

const router: Router = Router();

router.get("/professors", professors.getAll);

export const ProfessorsRouter: Router = router;
