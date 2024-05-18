'use client';

import ProductCard from '@/components/shop/card';
import { Product } from '@/types/stripe/product';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.085,
      duration: 0.35,
    },
  }),
};

function ProductCards({ products }: { products: Product[] }) {
  return (
    <>
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial='initial'
          whileInView='animate'
          variants={fadeInAnimationVariants}
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
