'use client';

import ProductCard from '@/components/shop/card';
import { Product } from '@/types/stripe/product';
import { bottomToTop } from '@/utils/framer-transitions';
import { motion } from 'framer-motion';

function ProductCards({ products }: { products: Product[] }) {
  return (
    <>
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial='initial'
          whileInView='animate'
          variants={bottomToTop(index)}
          viewport={{
            once: true,
          }}
          custom={index}>
          <ProductCard product={product} key={product.id} />
        </motion.div>
      ))}
    </>
  );
}

export default ProductCards;
