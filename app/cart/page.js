import { cookies } from 'next/headers';
import Image from 'next/image';
import { getToys } from '../../database/toys';

export default async function CartPage() {
  // getting the cookies
  const getProductsCookie = cookies().get('cart');
  let cartList = [];
  let productsParsed = [];

  if (getProductsCookie) {
    productsParsed = JSON.parse(getProductsCookie.value);
  }

  // comaping what is in the cookies with the database and getting the cart list
  const toys = await getToys();
  productsParsed.map((cookie) => {
    toys.find((toy) =>
      toy.id === cookie.id
        ? cartList.push({
            id: toy.id,
            price: toy.price,
            quantity: cookie.quantity,
          })
        : null,
    );

    return cartList;
  });

  return (
    <main>
      {cartList.map((toy) => {
        return (
          <div key={toy.id}>
            <Image
              src={`/images/${toy.id}.jpg`}
              alt={toy.toyName}
              width="300"
              height="300"
            />

            <p>{toy.price}€</p>
            <p> ukupno {toy.quantity}</p>
          </div>
        );
      })}
    </main>
  );
}
