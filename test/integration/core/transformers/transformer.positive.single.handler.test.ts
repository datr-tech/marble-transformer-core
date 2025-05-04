import { handlerNumericMock } from '@test-mtc/mocks';
import {
  IHandler,
  ITransformOptions,
  ITransformSource,
  transformer,
} from './../../../../dist';

describe('transformer', () => {
  describe('positive.single.handler', () => {
    test("should return the expected object, { 'result': 20 }, when a single, mock 'handler' was used.", () => {
      /*
       * Arrange
       */
      const handlers: IHandler[] = [handlerNumericMock];
      const options: ITransformOptions = { multiplier: 2 };
      const source: ITransformSource = { multiplicand: 10 };
      const resultExpected = { result: 20 };

      /*
       * Act
       */
      const transform = transformer({ handlers });
      const resultFound = transform({ source, options });

      /*
       * Assert
       */
      expect(resultFound).toStrictEqual(resultExpected);
    });
  });
});
