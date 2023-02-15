'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Checkout() {
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await router.push('/thankyou');
  };

  return (
    <div>
      <h4>Shipping Address</h4>
      <main>
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First name</label>
            <input
              onChange={onChange}
              data-test-id="checkout-first-name"
              name="firstName"
            />
            <label htmlFor="lastName">Last name</label>
            <input
              onChange={onChange}
              data-test-id="checkout-last-name"
              name="lastName"
            />
            <br />
            <label htmlFor="e-mail">E-mail</label>
            <input
              onChange={onChange}
              data-test-id="checkout-e-mail"
              name="e-mail"
            />
            <label htmlFor="address">Address</label>
            <input
              onChange={onChange}
              data-test-id="checkout-address"
              name="address"
            />
            <br />
            <label htmlFor="city">City</label>

            <input
              onChange={onChange}
              data-test-id="checkout-city"
              name="city"
            />
            <label htmlFor="postal-code">Postal code</label>
            <input
              onChange={onChange}
              data-test-id="checkout-postal-code"
              name="postal-code"
            />
            <hr />
            <h4>Credit card details</h4>
            <label htmlFor="credit-card">Credit card number</label>
            <input
              onChange={onChange}
              data-test-id="checkout-credit-card"
              name="credit-card"
            />
            <label htmlFor="expiration-date">Expiration date</label>
            <input
              onChange={onChange}
              data-test-id="checkout-expiration-date"
              name="expiration-date"
            />
            <br />
            <label htmlFor="security-code">Security code</label>
            <input
              onChange={onChange}
              data-test-id="checkout-security-code"
              name="security-code"
            />
            <br />
            <button data-test-id="checkout-confirm-order">confirm order</button>
          </form>
        </div>
      </main>
    </div>
  );
}
