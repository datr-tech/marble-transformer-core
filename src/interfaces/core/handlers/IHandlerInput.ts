/**
 * @module interfaces/core/handlers
 */
import { ITransformOptions, ITransformSource } from '@app-mtc/interfaces/core/transforms';
import { IHandlerAccumulator } from './IHandlerAccumulator';

/**
 * @name					IHandlerInput
 *
 * @description		The input interface for each 'handler', which is directly
 *                referenced within {@link interfaces/core/handlers/IHandler}.
 *
 * @author				Datr.Tech Admin <admin@datr.tech>
 * @version				0.3.2
 */
export interface IHandlerInput {
  accumulator: IHandlerAccumulator;
  options?: ITransformOptions;
  source?: ITransformSource;
}
