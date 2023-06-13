import { expect, it } from 'vitest';

const createCache = () => {
  // Reference: https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type
  // Record is a utility (not object) type. In the simple case below, we're mapping id arg's type to string type and value arg's type to string type
  const cache: Record<string, string> = {};

  const add = (id: string, value: string) => {
    cache[id] = value;
  };

  const remove = (id: string) => {
    delete cache[id];
  };

  return {
    cache,
    add,
    remove,
  };
};

it('Should add values to the cache', () => {
  const cache = createCache();

  cache.add('123', 'Matt');

  expect(cache.cache['123']).toEqual('Matt');
});

it('Should remove values from the cache', () => {
  const cache = createCache();

  cache.add('123', 'Matt');
  cache.remove('123');

  expect(cache.cache['123']).toEqual(undefined);
});
