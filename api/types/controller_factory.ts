import { PingController } from "../controllers/PingController";

export interface IControllerFactory {
    BuildPingController: () => PingController
}