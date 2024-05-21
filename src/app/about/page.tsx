'use client';

import { bottomToTop } from '@/utils/framer-transitions';
import { motion } from 'framer-motion';

function AboutPage() {
  return (
    <>
      <motion.div
        className='container py-[140px]'
        initial='initial'
        whileInView='animate'
        variants={bottomToTop()}
        viewport={{
          once: true,
        }}>
        <h1 className='font-accent tracking-wide uppercase text-4xl text-center'>
          About Page
        </h1>
      </motion.div>
    </>
  );
}

export default AboutPage;
