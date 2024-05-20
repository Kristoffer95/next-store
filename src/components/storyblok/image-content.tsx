import { ImageContentStoryblok } from '@/types/storyblok/component-types';
import Image from 'next/image';

function ImageContent({ blok }: { blok: ImageContentStoryblok }) {
  return (
    <div className='flex flex-col lg:flex-row'>
      {/* content */}
      <div className='w-full lg:w-[50vw]'>
        {/* <p>{blok.content?.text}</p> */}
        {/* <pre>
          <code>{JSON.stringify(blok.content, null, 2)}</code>
        </pre> */}
      </div>

      {/* image */}
      <div className='w-full lg:w-[50vw]'>
        {blok.image?.filename && (
          <Image
            src={blok.image?.filename}
            alt='placeholder'
            width={1000}
            height={1000}
          />
        )}
      </div>
    </div>
  );
}

export default ImageContent;
