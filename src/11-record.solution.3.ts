import { expect, it } from 'vitest';

interface Cache {
  // Reference: https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures
  // This index signature states that when an object matching shape of Cache interface is indexed with a string, the associated value will also be a string
  [id: string]: string;
}

const createCache = () => {
  const cache: Cache = {};

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
