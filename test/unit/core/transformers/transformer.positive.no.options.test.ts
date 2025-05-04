import { transformer } from '@app-mtc/core/transformers';
import { IHandler } from '@app-mtc/interfaces/core/handlers';
import { ITransformSource } from '@app-mtc/interfaces/core/transforms';
import { handlerStringMock } from '@test-mtc/mocks';

describe('transformer', () => {
  describe('positive.single.no.options', () => {
    test("should return the expected object when a single mock 'handler' was used (no 'options').", () => {
      /*
       * Arrange
       */
      const handlers: IHandler[] = [handlerStringMock];
      const fileNameMock = 'fileNameMock.ts';
      const filePathMock = `/var/www/${fileNameMock}`;
      const source: ITransformSource = { filePath: filePathMock };
      const resultExpected = { basename: fileNameMock };

      /*
       * Act
       */
      const transform = transformer({ handlers });
      const resultFound = transform({ source });

      /*
       * Assert
       */
      expect(resultFound).toStrictEqual(resultExpected);
    });
  });
});
