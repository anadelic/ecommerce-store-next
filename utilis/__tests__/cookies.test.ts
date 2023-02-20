import { getParsedCookie, setStringifiedCookie } from '../cookies';

test('set, gets and delete a cookie', () => {
  // setup

  const cookieKey = 'cart';
  const cookieValue = [{ id: 3, quantity: 7 }];
  test('set a cookie', () => {
    // exercise and assert
    // check if value of cookie starts as undefined (empty value)
    expect(getParsedCookie(cookieKey)).toBe(undefined);
  });
  test('set cookie value', () => {
    expect(() => setStringifiedCookie(cookieKey, cookieValue)).not.toThrow();
  });
  test('cookie value is present with the same structure and type', () => {
    expect(getParsedCookie(cookieKey)).toStrictEqual(cookieValue);
  });
});
