import { Router } from "express";

const router: Router = Router();

router.use("/", () => console.log("teste"));

export const MainRouter: Router = router;
