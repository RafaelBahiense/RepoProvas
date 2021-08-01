import { NextFunction, Request, Response } from "express";

import { ReceivedTest } from "../interfaces/Test";

import * as testsService from "../services/testsServices";

export async function getById(req: Request, res: Response, next: NextFunction) {
  try {
    const id = parseInt(req.params["id"]);
    const test = await testsService.getById(id);

    if (!test) return res.sendStatus(404);
    res.status(200).send(test);
  } catch (e) {
    next(e);
  }
}

export async function post(req: Request, res: Response, next: NextFunction) {
  try {
    const { name, categoryId, professorId, subjectId, link }: ReceivedTest =
      req.body;
    if (!(name && categoryId && professorId && subjectId && link))
      return res.sendStatus(400);

    await testsService.post({ name, categoryId, professorId, subjectId, link });

    res.sendStatus(201);
  } catch (e) {
    next(e);
  }
}
