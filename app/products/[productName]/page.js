import Image from 'next/image';
import { toys } from '../../../database/toys';

export const dynamic = 'force-dynamic';

export default function ProductPage({ params }) {
  const singleProduct = toys.find((toy) => {
    return toy.type.toLowerCase() === params.productName;
  });

  return (
    <div>
      <h2>{singleProduct.type}</h2>
      <Image
        src={`/images/${singleProduct.type}-${singleProduct.id}.jpg`}
        alt={singleProduct.type}
        width="300"
        height="300"
      />
    </div>
  );
}
