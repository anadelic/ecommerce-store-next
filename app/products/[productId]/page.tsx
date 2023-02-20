import { Metadata } from 'next';
import Image from 'next/image';
import { getToyById } from '../../../database/toys';
import { toyNotFoundMetadata } from './not-found';
import Product from './product.js';
import styles from './singleProduct.module.scss';

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

  return (
    <>
      <div className={styles.productImage}>
        <Image
          data-test-id="product-image"
          src={`/images/${singleProduct?.id}.jpg`}
          alt="Image of a toy"
          width="300"
          height="300"
        />
        <Product toy={singleProduct} />
      </div>
      <h1>{singleProduct?.toyName}</h1>
      <p data-test-id="product-price">{singleProduct?.price}</p>
      <div className={styles.descriptionStyle}>
        <p>{singleProduct?.toyDescription}</p>
      </div>
    </>
  );
}
