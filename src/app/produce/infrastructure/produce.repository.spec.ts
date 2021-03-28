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

    it.each([
      {
        first: 1,
        count: 1,
        month: 1,
        length: 1
      },
      {
        first: 1,
        count: 1,
        month: 2,
        length: 0
      }
    ])("should return produces for month", async (el) => {
      const produceEntity = new ProduceEntity();
      produceEntity.id = 1;
      produceEntity.seasonFirstMonth = el.first;
      produceEntity.seasonMonthsCount = el.count;
      jest.spyOn(produces, "find").mockImplementation(() => Promise.resolve([produceEntity]));
      expect(await repository.findAll({month: el.month})).toHaveLength(el.length);
    });
  });
});
