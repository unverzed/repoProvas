import { Request, Response, NextFunction } from "express";

export default async function errorHandler( error, req: Request, res: Response, next: NextFunction) {

  if (error.type === "conflict") {
      return res.status(409).send(error.message)
  }
  if (error.type === "unauthorized") {
    return res.status(401).send(error.message)
}
  
  return res.sendStatus(500)
}