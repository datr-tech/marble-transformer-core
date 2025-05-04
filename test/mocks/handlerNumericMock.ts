import { IHandler } from '@app-mtc/interfaces/core/handlers';

export const handlerNumericMock: IHandler = ({ source, accumulator, options }) => {
  let multiplicandStr: string = '0';
  let multiplierStr: string = '0';
  let accumulatorResultStr: string = '0';

  if (typeof source['multiplicand'] !== 'undefined') {
    multiplicandStr = source['multiplicand'] as string;
  }

  if (typeof options['multiplier'] !== 'undefined') {
    multiplierStr = options['multiplier'] as string;
  }

  if (typeof accumulator['result'] !== 'undefined') {
    accumulatorResultStr = accumulator['result'] as string;
  }

  const multiplicand = parseInt(multiplicandStr, 10);
  const multiplier = parseInt(multiplierStr, 10);
  const accumulatorResult = parseInt(accumulatorResultStr, 10);

  accumulator['result'] = accumulatorResult + multiplicand * multiplier;

  return accumulator;
};
