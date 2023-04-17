import { Request, Response } from 'express';
import { HTTPCode } from "../constants/http_codes";
import { HTTPResponse } from "../types/http_responses";

export class PingController {
    Ping(req: Request, res: Response) {
        const pingResponse: HTTPResponse = {
            code: HTTPCode.StatusOk,
            result: {
                "message": "pong"
            }
        }

        res.status(HTTPCode.StatusOk).json(pingResponse);
    }
}
