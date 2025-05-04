import { ITransformerInput } from './ITransformerInput';
import { ITransformerOutput } from './ITransformerOutput';

export interface ITransformer {
  (args: ITransformerInput): ITransformerOutput;
}
