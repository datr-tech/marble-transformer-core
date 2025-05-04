import { ITransformOptions } from './ITransformOptions';
import { ITransformSource } from './ITransformSource';

export interface ITransformInput {
  source: ITransformSource;
  options?: ITransformOptions;
}
