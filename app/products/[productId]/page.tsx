import Image from 'next/image';
import { getToyById } from '../../../database/toys';
import Product from './product.js';

type Props = {
  params: { productId: string };
};

export const dynamic = 'force-dynamic';

export default async function ProductPage(props: Props) {
  const singleProduct = await getToyById(parseInt(props.params.productId));
  console.log(singleProduct);
  return (
    <div>
      <Image
        src={`/images/${singleProduct?.id}.jpg`}
        alt="Image of a toy"
        width="300"
        height="300"
      />
      <Product toy={singleProduct} />
    </div>
  );
}
