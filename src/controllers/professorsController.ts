import { NextFunction, Request, Response } from "express";

import * as professorsService from "../services/professorsServices";

export async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const professors = await professorsService.getAll();
    res.status(200).send(professors);
  } catch (e) {
    next(e);
  }
}
