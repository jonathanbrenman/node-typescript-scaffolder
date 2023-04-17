import { HTTPCode } from "../constants/http_codes";
import { IControllerFactory } from "../types/controller_factory";
import { HTTPResponse } from "../types/http_responses";
import { Factory, ControllerFactory } from "./factory";
import { Request, Response } from "express";

describe("Testing PingController", () => {
  test("Testing Ping method", () => {
    const factory: IControllerFactory = Factory;
    expect(factory).toEqual(new ControllerFactory());

    const req = {} as Request;
    const res = {} as Response;

    const expectedResult: HTTPResponse = {
      code: HTTPCode.StatusOk,
      result: {
        message: "pong",
      },
    };

    res.json = jest.fn().mockReturnValue(expectedResult);

    res.status = jest.fn(() => {
      res.statusCode = HTTPCode.StatusOk;
      return res;
    });

    const pingController = factory.BuildPingController();
    pingController.Ping(req, res);

    expect(res.json).toHaveBeenCalledWith(expectedResult);
    expect(res.status).toHaveBeenCalledWith(HTTPCode.StatusOk);
  });
});
