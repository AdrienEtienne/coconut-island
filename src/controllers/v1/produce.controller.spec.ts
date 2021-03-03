import {Test, TestingModule} from "@nestjs/testing";
import {IProduceRepository} from "../../app/produce/domain";
import {ProduceRepository} from "../../app/produce/infrastructure/produce.repository";
import {ProduceController} from "./produce.controller";

describe("ProduceController", () => {
  let produceRepository: IProduceRepository;
  let controller: ProduceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [ProduceRepository],
      controllers: [ProduceController]
    })
      .overrideProvider(ProduceRepository)
      .useValue({findAll: () => Promise.resolve([])} as IProduceRepository)
      .compile();

    produceRepository = app.get<ProduceRepository>(ProduceRepository);
    controller = app.get<ProduceController>(ProduceController);
  });

  describe("root", () => {
    it("should return empty string", async () => {
      jest.spyOn(produceRepository, "findAll").mockImplementation(() => Promise.resolve([]));
      expect(await controller.findAll()).toStrictEqual({
        object: "list",
        data: []
      });
    });
  });
});
