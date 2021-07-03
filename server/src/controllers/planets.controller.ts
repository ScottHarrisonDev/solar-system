import express, {Request,Response} from "express";
import * as PlanetService from "../services/planets.service";
import {Planet} from "../interfaces/planet.interface";
import {celestialBodyReq} from "../interfaces/celestialBodyReq.interface";

export const planetsRouter = express.Router();

planetsRouter.get("/celestial-bodies", async (req: Request<{},{},{},celestialBodyReq>, res: Response) => {
  try {
    if (req.query.page === undefined) {
      res.status(400).send("Missing parameter: page");
      return;
    }
    if (req.query.perPage === undefined) {
      res.status(400).send("Missing parameter: perPage");
      return;
    }

    const planets: Planet[] = await PlanetService.findByPage(parseInt(req.query.page), parseInt(req.query.perPage));

    if (planets.length === 0) {
      res.status(404).send("No items found");
      return;
    }

    res.status(200).send(planets);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
