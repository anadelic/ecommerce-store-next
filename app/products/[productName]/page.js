import Image from 'next/image';
import { getToyById } from '../../../database/toys';
import Product from './product.js';

export const dynamic = 'force-dynamic';

export default async function ProductPage({ params }) {
  const singleProduct = await getToyById(params.productId);
  return (
    <div>
      <Product toy={singleProduct} />
    </div>
  );
}
