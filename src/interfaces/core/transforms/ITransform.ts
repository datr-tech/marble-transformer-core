import { ITransformInput } from './ITransformInput';
import { ITransformOutput } from './ITransformOutput';

export interface ITransform {
  (args: ITransformInput): ITransformOutput;
}
