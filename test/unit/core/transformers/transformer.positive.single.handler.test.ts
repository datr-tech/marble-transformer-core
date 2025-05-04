import { transformer } from '@app-mtc/core/transformers';
import { IHandler } from '@app-mtc/interfaces/core/handlers';
import { ITransformOptions, ITransformSource } from '@app-mtc/interfaces/core/transforms';
import { handlerNumericMock } from '@test-mtc/mocks';

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
