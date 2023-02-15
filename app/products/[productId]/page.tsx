import { Metadata } from 'next';
import Image from 'next/image';
import { getToyById } from '../../../database/toys';
import { toyNotFoundMetadata } from './not-found';
import Product from './product.js';

export async function generateMetadata(props: Props): Promise<Metadata> {
  const singleProduct = await getToyById(parseInt(props.params.productId));

  if (!singleProduct) {
    return toyNotFoundMetadata;
  }

  return {
    title: `Smallkind|${singleProduct.toyName}`,
    description: 'Here you can find the toy you always wanted',
  };
}

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
