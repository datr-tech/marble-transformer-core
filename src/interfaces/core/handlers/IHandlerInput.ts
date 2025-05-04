import { ITransformOptions, ITransformSource } from '@app-mtc/interfaces/core/transforms';
import { IHandlerAccumulator } from './IHandlerAccumulator';

export interface IHandlerInput {
  accumulator: IHandlerAccumulator;
  options: ITransformOptions;
  source: ITransformSource;
}
