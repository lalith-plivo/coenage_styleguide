import { randomId } from './random-id';

describe('@cestyle/hooks/random-id', () => {
  it('returns random id with cestyle- prefix', () => {
    expect(randomId().includes('cestyle-')).toBe(true);
    expect(randomId()).toHaveLength(17);
  });
});
