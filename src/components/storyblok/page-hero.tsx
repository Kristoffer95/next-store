import { storyblokEditable } from '@storyblok/react/rsc';
import type { PageHeroStoryblok } from '@/types/storyblok/component-types';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { bottomToTop } from '@/utils/framer-transitions';

function PageHero({ blok }: { blok: PageHeroStoryblok }) {
  return (
    <>
      <motion.div
        initial='initial'
        whileInView='animate'
        variants={bottomToTop()}
        viewport={{
          once: true,
        }}
        {...storyblokEditable(blok)}
        className='flex justify-center max-h-[800px]'>
        {blok?.image?.filename && (
          <Image
            src={blok.image?.filename}
            alt={blok.image?.alt || ''}
            sizes='(max-width: 3000px) 100vw'
            height={500}
            width={2000}
            className='object-cover w-full'
          />
        )}
      </motion.div>
    </>
  );
}

export default PageHero;
