import express, {Request,Response} from "express";
import * as PlanetService from "../services/planets.service";
import {Planet} from "../interfaces/planet.interface";

export const planetsRouter = express.Router();

planetsRouter.get("/celestial-bodies", async (req: Request, res: Response) => {
  try {
    const planets: Planet[] = await PlanetService.findAll();

    res.status(200).send(planets);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
