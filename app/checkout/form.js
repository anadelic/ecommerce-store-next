'use client';

import { useRouter } from 'next/navigation';

export default function Form() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await router.push('/thankyou');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First name: </label>
      <input required data-test-id="checkout-first-name" name="firstName" />
      <br />
      <label htmlFor="lastName">Last name: </label>
      <input required data-test-id="checkout-last-name" name="lastName" />
      <br />
      <label htmlFor="e-mail">E-mail: </label>
      <input required data-test-id="checkout-email" name="e-mail" />
      <br />
      <label htmlFor="address">Address: </label>
      <input required data-test-id="checkout-address" name="address" />
      <br />
      <label htmlFor="city">City: </label>

      <input required data-test-id="checkout-city" name="city" />
      <br />
      <label htmlFor="country">Country: </label>

      <input required data-test-id="checkout-country" name="country" />
      <br />
      <label htmlFor="postal-code">Postal code: </label>
      <input required data-test-id="checkout-postal-code" name="postal-code" />
      <br />
      <h4>Credit card details:</h4>
      <br />
      <label htmlFor="credit-card">Credit card number: </label>
      <input required data-test-id="checkout-credit-card" name="credit-card" />
      <br />
      <label htmlFor="expiration-date">Expiration date: </label>
      <input
        type="month"
        required
        data-test-id="checkout-expiration-date"
        name="expiration-date"
      />
      <br />
      <label htmlFor="security-code">Security code: </label>
      <input
        required
        data-test-id="checkout-security-code"
        name="security-code"
      />
      <br />
      <button data-test-id="checkout-confirm-order">confirm order</button>
    </form>
  );
}
