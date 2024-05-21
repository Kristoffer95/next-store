import Image from 'next/image';
import { render } from 'storyblok-rich-text-react-renderer';
import type { ImageContentStoryblok } from '@/types/storyblok/component-types';
import { motion } from 'framer-motion';
import { bottomToTop } from '@/utils/framer-transitions';

function ImageContent({ blok }: { blok: ImageContentStoryblok }) {
  return (
    <div className='flex flex-col lg:flex-row'>
      {/* content */}
      <div
        className='flex items-center justify-center 
        w-full lg:w-[50vw] py-5'>
        <motion.div
          className='richtext'
          initial='initial'
          whileInView='animate'
          variants={bottomToTop(2.5)}
          viewport={{
            once: true,
          }}>
          <div className='flex flex-col justify-center px-10 max-w-[700px]'>
            {render(blok.content)}
          </div>
        </motion.div>
      </div>

      {/* image */}
      <div className='w-full lg:w-[50vw]'>
        {blok.image?.filename && (
          <motion.div
            initial='initial'
            whileInView='animate'
            variants={bottomToTop(4)}
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
