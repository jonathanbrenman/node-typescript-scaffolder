import { IControllerFactory } from "../types/controller_factory";
import { Factory, ControllerFactory } from "./factory";

describe("Testing Controller Factory", () => {
  test("Test new Factory", () => {
    const factory: IControllerFactory = Factory;
    expect(factory).toEqual(new ControllerFactory());
  });
});
