import { transformer } from '@app-mtc/core/transformers';
import { IHandler } from '@app-mtc/interfaces/core/handlers';
import { ITransformOptions, ITransformSource } from '@app-mtc/interfaces/core/transforms';
import { handlerNumericMock, handlerStringMock } from '@test-mtc/mocks';

describe('transformer', () => {
  describe('positive.multiple.sources', () => {
    test("should return distinct result objects when calling 'transform' multiple times.", () => {
      /*
       * Arrange
       */
      const basename = 'fileNameMock.ts';
      const optionsOne: ITransformOptions = { multiplier: 2 };
      const sourceOne: ITransformSource = { multiplicand: 10 };
      const sourceTwo: ITransformSource = { filePath: `/var/www/${basename}` };
      const resultOneExpected = { result: 20 };
      const resultTwoExpected = { basename, result: 0 };

      /*
       * Act
       */
      const handlers: IHandler[] = [handlerNumericMock, handlerStringMock];
      const transform = transformer({ handlers });
      const resultOneFound = transform({ source: sourceOne, options: optionsOne });
      const resultTwoFound = transform({ source: sourceTwo });

      /*
       * Assert
       */
      expect(resultOneFound).not.toStrictEqual(resultTwoFound);
      expect(resultOneFound).toStrictEqual(resultOneExpected);
      expect(resultTwoFound).toStrictEqual(resultTwoExpected);
    });
  });
});
