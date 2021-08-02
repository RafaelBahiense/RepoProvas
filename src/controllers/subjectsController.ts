import { NextFunction, Request, Response } from "express";

import * as subjectsService from "../services/subjectsServices";

export async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const subjects = await subjectsService.getAll();
    res.status(200).send(subjects);
  } catch (e) {
    next(e);
  }
}
