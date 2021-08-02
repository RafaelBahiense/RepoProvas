import { Router } from "express";

import * as tests from "../controllers/testsController";

const router: Router = Router();

router.get("/tests/:id", tests.getById);

router.post("/tests/", tests.post);

router.get("/tests/professor/:id", tests.getByProfessorId);

router.get("/tests/subject/:id", tests.getBySubjectId);

export const TestsRouter: Router = router;
