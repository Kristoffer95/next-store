import { TextContentStoryblok } from '@/types/storyblok/component-types';
import { accentFont } from '@/utils/fonts';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: () => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.085 * 1.5,
      duration: 0.35,
    },
  }),
};

function TextContent({ blok }: { blok: TextContentStoryblok }) {
  return (
    <>
      <motion.div
        initial='initial'
        whileInView='animate'
        variants={fadeInAnimationVariants}
        viewport={{
          once: true,
        }}>
        <div className='container py-[40px] md:py-[80px] lg:py-[100px] flex justify-center'>
          <p
            className='max-w-[900px] leading-[1.7] tracking-wide text-center
        text-base lg:text-xl font-accent font-light'>
            {blok.content}
          </p>
        </div>
      </motion.div>
    </>
  );
}

export default TextContent;
