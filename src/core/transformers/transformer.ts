import { ITransformer } from '@app-mtc/interfaces/core/transformers';
import { ITransformOutput } from '@app-mtc/interfaces/core/transforms';

/**
 * @name							Transformer
 *
 * @description				The transformer accepts an array of 'handlers',
 *										each of which, ultimately, would be called from the
 *										inner 'transform' function.
 *
 * @param							{ITransformerInput}		params
 * @param							{IHandler[]}					params.handlers		REQUIRED		An array of 'handler' functions.
 *
 * @returns						{ITransformerOutput}	An object containing a 'transform' function.
 *
 * @author						Datr.Tech Admin <admin@datr.tech>
 * @version						0.3.1
 *
 * @example           const transform = transformer({ handlers });
 *                    const destination = transform({ source });
 *
 * @example           const destination = transformer({ handlers })({ source });
 */
export const transformer: ITransformer = ({ handlers }) => {
  /**
   * @name            transform
   *
   * @description     Transform the received 'source' param by passing it,
   *                  along with any 'options', and along with the reducer's
   *                  'accumulator' to each of the 'handler' functions.
   *
   * @param           {ITransformInput}     params
   * @param           {ISource}             params.source			REQUIRED		The object to be transformer.
   * @param           {IOptions}            params.options		OPTIONAL		An optional 'options' object.
   *
   * @returns					{ITransformOutput}		The transformed 'source'.
   *
   * @author					Datr.Tech Admin <admin@datr.tech>
   * @version					0.3.1
   */
  return ({ source, options }): ITransformOutput => {
    return handlers.reduce((accumulator, handler) => {
      return handler({
        source,
        accumulator: { ...accumulator },
        options: options || {},
      });
    }, {});
  };
};
