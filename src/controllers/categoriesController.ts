import { NextFunction, Request, Response } from "express";

import * as categoriesService from "../services/categoriesServices";

export async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const categories = await categoriesService.getAll();
    res.status(200).send(categories);
  } catch (e) {
    next(e);
  }
}
