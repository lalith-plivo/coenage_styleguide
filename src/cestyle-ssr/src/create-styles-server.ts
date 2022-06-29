import { Options } from '@emotion/cache';
import createEmotionServer from '@emotion/server/create-instance';
import { getCache } from '@cestyle/styles';

export function createStylesServer(options?: Options) {
  return createEmotionServer(getCache(options));
}
