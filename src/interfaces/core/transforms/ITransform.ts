/**
 * @module interfaces/core/transforms
 */
import { ITransformInput } from './ITransformInput';
import { ITransformOutput } from './ITransformOutput';

/**
 * @name					ITransform
 *
 * @description		The interface for {@link module:core/transforms/transform} with child inputs and outputs.
 *
 * @author				Datr.Tech Admin <admin@datr.tech>
 * @version				0.3.2
 */
export interface ITransform {
  (args: ITransformInput): ITransformOutput;
}
