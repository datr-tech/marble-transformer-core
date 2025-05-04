/**
 * @module interfaces/core/transformers
 */
import { ITransformerInput } from './ITransformerInput';
import { ITransformerOutput } from './ITransformerOutput';

/**
 * @name					ITransformer
 *
 * @description		The interface for {@link module:core/transformers/transformer} with child inputs and outputs.
 *
 * @author				Datr.Tech Admin <admin@datr.tech>
 * @version				0.3.2
 */
export interface ITransformer {
  (args: ITransformerInput): ITransformerOutput;
}
