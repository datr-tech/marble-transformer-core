/**
 * @module interfaces/core/transformers
 */
import { IHandler } from '@app-mtc/interfaces/core/handlers/IHandler';

/**
 * @name					ITransformer
 *
 * @description		The input interface for {@link module:core/transformers/transformer}, which is directly
 *                referenced within {@link module:interfaces/core/transformers/ITransformer}.
 *
 * @author				Datr.Tech Admin <admin@datr.tech>
 * @version				0.3.2
 */
export interface ITransformerInput {
  handlers: IHandler[];
}
