/**
 * @module interfaces/core/handlers
 */
import { IHandlerInput } from './IHandlerInput';
import { IHandlerOutput } from './IHandlerOutput';

/**
 * @name					IHandler
 *
 * @description		The interface for each handler with child inputs and outputs.
 *
 * @author				Datr.Tech Admin <admin@datr.tech>
 * @version				0.3.2
 */
export interface IHandler {
  (args: IHandlerInput): IHandlerOutput;
}
