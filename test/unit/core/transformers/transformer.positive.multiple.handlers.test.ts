import { transformer } from '@app-mtc/core/transformers';
import { IHandler } from '@app-mtc/interfaces/core/handlers';
import { ITransformOptions, ITransformSource } from '@app-mtc/interfaces/core/transforms';
import { handlerNumericMock } from '@test-mtc/mocks';

describe('transformer', () => {
  describe('positive.multiple.handlers', () => {
    test("should return the expected object, { 'result': 40 }, when multiple instances of the same mock 'handler' were used.", () => {
      /*
       * Arrange
       */
      const handlers: IHandler[] = [handlerNumericMock, handlerNumericMock];
      const options: ITransformOptions = { multiplier: 2 };
      const source: ITransformSource = { multiplicand: 10 };
      const resultExpected = { result: 40 };

      /*
       * Act
       */
      const resultFound = transformer({ handlers })({ source, options });

      /*
       * Assert
       */
      expect(resultFound).toStrictEqual(resultExpected);
    });
  });
});
