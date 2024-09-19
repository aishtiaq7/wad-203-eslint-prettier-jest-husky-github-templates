// __tests__/add.test.js

const { add } = require('../index');

describe('add function', () => {
  test('adds two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds positive and negative number', () => {
    expect(add(5, -2)).toBe(3);
  });

  test('adds two negative numbers', () => {
    expect(add(-4, -6)).toBe(-10);
  });

  test('adds zero', () => {
    expect(add(0, 5)).toBe(5);
  });
});
