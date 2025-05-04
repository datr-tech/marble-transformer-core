/**
 * @module interfaces/core/handlers
 */
import { ICommonBase } from '@app-mtc/interfaces/core/common';

/**
 * @name					IHandlerAccumulator
 *
 * @description		The interface for the reducer accumulator, which is passed to
 *                and returned from each handler, and which is directly referenced
 *                within {@link interfaces/core/handlers/IHandlerInput}.
 *
 * @author				Datr.Tech Admin <admin@datr.tech>
 * @version				0.3.2
 */
export interface IHandlerAccumulator {
  [key: string]:
    | ICommonBase
    | ICommonBase[]
    | { [key: string]: ICommonBase | ICommonBase[] };
}
