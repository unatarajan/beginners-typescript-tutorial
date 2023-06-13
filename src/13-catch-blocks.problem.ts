import { expect, it } from 'vitest';

const tryCatchDemo = (state: 'fail' | 'succeed') => {
  try {
    if (state === 'fail') {
      // throw keyword is used to raise an exception (see https://www.scaler.com/topics/typescript/typescript-try-catch/)
      // Error obj: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/Error
      throw new Error('Failure!');
    }
  } catch (e) {
    // the catch block is executed when any exception is thrown from within the try block (see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch#unconditional_catch_block)
    // Solution from https://fettblog.eu/typescript-typing-catch-clauses/#2.-there-is-only-one-catch-clause-in-javascript
    return e instanceof Error && e.message;
  }
};

it('Should return the message when it fails', () => {
  expect(tryCatchDemo('fail')).toEqual('Failure!');
});
