import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';

describe('CatsController', () => {
  let catController: CatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
    }).compile();

    catController = module.get<CatsController>(CatsController);
  });

  describe('create', () => {
    it('should return string', () => {
      const body = {
        name: 'lily',
        age: 3,
        breed: 'korean short hair',
      };

      expect(catController.create(body)).toBe('This action adds a new cat');
    });
  });

  describe('findAll', () => {
    const query = {
      limit: 10,
    };
    expect(catController.findAll(query)).toBe(
      `This action returns all cats (limit: ${query.limit} items)`,
    );
  });
});
