import { cookies } from 'next/headers';
import { getToys } from '../../database/toys';
import { Total } from '../../utilis/cookies';
import Form from './form';

export default async function Checkout() {
  const toys = await getToys();

  // Get cookies
  const productsCookie = cookies().get('cart');

  let productsCookieParsed = [];

  if (productsCookie) {
    productsCookieParsed = JSON.parse(productsCookie.value);
  }
  // adding qty to toys
  const productsWithQuantity = toys.map((toy) => {
    const productWithQuantity = { ...toy, quantity: 0 };

    // Read the cookie and commparing the ids with toy's id
    const productInCookie = productsCookieParsed.find(
      (productObject) => toy.id === productObject.id,
    );

    // if product is found the quantity gets updated
    if (productInCookie) {
      productWithQuantity.quantity = productInCookie.quantity;
    }
    return productWithQuantity;
  });

  // Calculate the total sum of price with imported reduce method
  const totalPrice = Total(productsWithQuantity);

  return (
    <div>
      <h4>Shipping Address</h4>
      <main>
        <div>
          <p>Total sum: {totalPrice}</p>
        </div>
        <div>
          <Form />
        </div>
      </main>
    </div>
  );
}
