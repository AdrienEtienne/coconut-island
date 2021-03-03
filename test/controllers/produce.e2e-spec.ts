import {Test, TestingModule} from "@nestjs/testing";
import {INestApplication} from "@nestjs/common";
import * as request from "supertest";
import {AppModule} from "./../../src/app.module";
import {Repository} from "typeorm";
import {ProduceEntity} from "../../src/app/produce/infrastructure/produce.entity";
import {getRepositoryToken} from "@nestjs/typeorm";

describe("ProduceController (e2e)", () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    const produces = moduleFixture.get<Repository<ProduceEntity>>(getRepositoryToken(ProduceEntity));
    await produces.delete({});
  });

  it("/produces (GET)", async () => {
    const response = await request(app.getHttpServer()).get("/produces").expect(200);
    expect(response.body).toStrictEqual({
      object: "list",
      data: []
    });
  });

  afterEach(() => app.close());
});
