import express from "express";
import { Factory } from "../controllers/factory";
import { PingController } from "../controllers/PingController";

const router = express.Router();
const pingController: PingController = Factory.BuildPingController();

router.get("/", (req: express.Request, res: express.Response) => pingController.Ping(req, res));

export const PingRoutes = router;