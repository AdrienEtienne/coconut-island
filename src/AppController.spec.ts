import {Test, TestingModule} from "@nestjs/testing";
import {AppController} from "./AppController";

describe("AppController", () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController]
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe("root", () => {
    it("should return empty string", () => {
      expect(appController.root()).toBe("");
    });
  });
});
