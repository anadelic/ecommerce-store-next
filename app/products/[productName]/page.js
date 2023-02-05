import Image from 'next/image';
import { toys } from '../../../database/toys';
import Product from './product';

export const dynamic = 'force-dynamic';

export default function ProductPage({ params }) {
  const singleProduct = toys.find((toy) => {
    return toy.type.toLowerCase() === params.productName;
  });

  return (
    <div>
      <Product toy={singleProduct} />
    </div>
  );
}
