import { Request, Response } from "express";
import testsService from "../services/testsService";

export async function createTest(req: Request, res: Response){
    const test = req.body;
    await testsService.createTest(test);
    res.sendStatus(201);
}

export async function getTestsByDiscipline(req: Request, res: Response){
    const tests = await testsService.getTestsByDiscipline();
    res.send(tests);
}

export async function getTestsByTeacher(req: Request, res: Response){
    const tests = await testsService.getTestsByTeacher();
    res.send(tests);
}