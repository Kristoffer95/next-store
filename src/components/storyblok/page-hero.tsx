import { storyblokEditable } from '@storyblok/react/rsc';
import type { PageHeroStoryblok } from '@/types/storyblok/component-types';
import Image from 'next/image';

function PageHero({ blok }: { blok: PageHeroStoryblok }) {
  return (
    <div
      {...storyblokEditable(blok)}
      className='flex justify-center max-h-[800px]'>
      {/* <pre>{JSON.stringify(blok, null, 2)}</pre> */}
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
    </div>
  );
}

export default PageHero;
