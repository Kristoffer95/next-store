import Image from 'next/image';
import { render } from 'storyblok-rich-text-react-renderer';
import type { ImageContentStoryblok } from '@/types/storyblok/component-types';
import { motion } from 'framer-motion';

const contentFadeIn = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: () => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.085 * 2.5,
      duration: 0.35,
    },
  }),
};

const imageFadeIn = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: () => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.085 * 4,
      duration: 0.35,
    },
  }),
};

function ImageContent({ blok }: { blok: ImageContentStoryblok }) {
  return (
    <div className='flex flex-col lg:flex-row'>
      {/* content */}
      <motion.div
        className='flex items-center justify-center 
        w-full lg:w-[50vw] py-5'
        initial='initial'
        whileInView='animate'
        variants={contentFadeIn}
        viewport={{
          once: true,
        }}>
        <div className='richtext'>
          <div className='flex flex-col justify-center px-10 max-w-[700px]'>
            {render(blok.content)}
          </div>
        </div>
      </motion.div>

      {/* image */}
      <div className='w-full lg:w-[50vw]'>
        {blok.image?.filename && (
          <motion.div
            initial='initial'
            whileInView='animate'
            variants={imageFadeIn}
            viewport={{
              once: true,
            }}>
            <Image
              src={blok.image?.filename}
              alt='placeholder'
              width={1000}
              height={1000}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default ImageContent;
