import { IControllerFactory } from "../types/controller_factory";
import { PingController } from "./PingController";

export class ControllerFactory {
    _pingController: PingController

    BuildPingController(): PingController {
        this._pingController = new PingController();
        return this._pingController;
    }
}

export const Factory: IControllerFactory = new ControllerFactory();
