import {Repository} from "typeorm";
import {ProduceEntity} from "./produce.entity";
import {ProduceRepository} from "./produce.repository";

describe("ProduceRepository", () => {
  let produces: Repository<ProduceEntity>;
  let repository: ProduceRepository;

  beforeEach(() => {
    produces = new Repository<ProduceEntity>();
    repository = new ProduceRepository(produces);
  });

  describe("findAll", () => {
    it("should return produces", async () => {
      jest.spyOn(repository, "findAll").mockImplementation(() => Promise.resolve([]));
      expect(await repository.findAll()).toStrictEqual([]);
    });
  });
});
