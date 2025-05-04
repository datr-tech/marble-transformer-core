/**
 * @module interfaces/core/transforms
 */
import { IHandlerAccumulator } from '@app-mtc/interfaces/core/handlers/IHandlerAccumulator';

/**
 * @name					ITransformOutput
 *
 * @description		The output interface for {@link module:core/transforms/transform}, which is directly
 *                referenced within {@link module:interfaces/core/transforms/ITransform}
 *
 * @author				Datr.Tech Admin <admin@datr.tech>
 * @version				0.3.2
 */
export type ITransformOutput = IHandlerAccumulator;
