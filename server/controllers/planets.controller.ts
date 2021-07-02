import express, {Request,Response} from "express";
import * as PlanetService from "../services/planets.service";
import {Planet} from "../interfaces/planet.interface";
import {celestialBodyReq} from "../interfaces/celestialBodyReq.interface";

export const planetsRouter = express.Router();

planetsRouter.get("/celestial-bodies", async (req: Request<{},{},{},celestialBodyReq>, res: Response) => {
  try {
    const planets: Planet[] = await PlanetService.findByPage(parseInt(req.query.page), parseInt(req.query.perPage));

    res.status(200).send(planets);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
