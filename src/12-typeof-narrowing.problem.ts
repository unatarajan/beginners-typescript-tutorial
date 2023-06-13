import { expect, it } from 'vitest';

const coerceAmount = (amount: number | { amount: number }) => {
  // conditional narrowing of passed arg's type
  // Reference: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#typeof-type-guards
  return typeof amount === 'number' ? amount : amount.amount;
};

it('Should return the amount when passed an object', () => {
  expect(coerceAmount({ amount: 20 })).toEqual(20);
});

it('Should return the amount when passed a number', () => {
  expect(coerceAmount(20)).toEqual(20);
});
