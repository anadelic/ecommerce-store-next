import Cookies from 'js-cookie';

// import { getToyById } from '../database/toys';

export function getParsedCookie(key) {
  const cookieValue = Cookies.get(key); // Type string | Undefined

  if (!cookieValue) {
    return undefined;
  }

  try {
    return JSON.parse(cookieValue); // Type should be a string
  } catch (err) {
    return undefined;
  }
}

export function setStringifiedCookie(key, value) {
  Cookies.set(key, JSON.stringify(value));
}

// deleting a cookie
export function deleteCookie(key) {
  Cookies.remove(key);
}

export function Total(items) {
  // Calculate the total sum of price with reduce method
  const totalPrice = items.reduce(
    (total, item) => total + parseInt(item.price * item.quantity),
    0,
  );
  return totalPrice;
}
