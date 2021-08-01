import { Router } from "express";

import * as tests from "../controllers/testsController";

const router: Router = Router();

router.get("/tests/:id", tests.getById);

router.post("/tests/", tests.post);

export const TestsRouter: Router = router;
