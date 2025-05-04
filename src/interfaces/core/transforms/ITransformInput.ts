/**
 * @module interfaces/core/transforms
 */
import { ITransformOptions } from './ITransformOptions';
import { ITransformSource } from './ITransformSource';

/**
 * @name					ITransformInput
 *
 * @description		The input interface for {@link module:core/transforms/transform}, which is directly
 *                referenced within {@link module:interfaces/core/transforms/ITransform}
 *
 * @author				Datr.Tech Admin <admin@datr.tech>
 * @version				0.3.2
 */
export interface ITransformInput {
  source: ITransformSource;
  options?: ITransformOptions;
}
