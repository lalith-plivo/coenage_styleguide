import createCache, { EmotionCache, Options } from '@emotion/cache';
import { useCeStyleEmotionOptions } from '../theme/CeStyleProvider';

const defaultCacheOptions: Options = {
  key: 'cestyle',
  prepend: true,
};

export const { getCache } = (() => {
  let cache: EmotionCache;
  let _key = defaultCacheOptions.key;

  function _getCache(options?: Options) {
    if (cache === undefined || _key !== options?.key) {
      _key = options?.key || 'cestyle';
      cache = createCache(options?.key ? options : defaultCacheOptions);
    }

    return cache;
  }

  return { getCache: _getCache };
})();

export function useEmotionCache() {
  const options = useCeStyleEmotionOptions();
  return getCache(options);
}
