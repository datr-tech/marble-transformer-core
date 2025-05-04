import { IHandler } from '@app-mtc/interfaces/core/handlers';
import path from 'node:path';

export const handlerStringMock: IHandler = ({ source, accumulator }) => {
  let filePath = '';

  if (typeof source['filePath'] !== 'undefined') {
    filePath = source['filePath'] as string;
  }

  if (filePath !== '') {
    accumulator['basename'] = path.basename(filePath);
  }

  return accumulator;
};
