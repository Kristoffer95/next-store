'use client';

import { getProducts } from '@/actions/stripe/products';
import ProductCard from '@/components/products/card';
import { Product } from '@/types/stripe/product';
import { delay, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.35,
    },
  }),
};

function ProductCards() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    };

    fetchProducts();
  }, []);

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
