import { TeaserStoryblok } from '@/types/storyblok/component-types';
import { storyblokEditable } from '@storyblok/react/rsc';

const Teaser = ({ blok }: { blok: TeaserStoryblok }) => {
  return (
    <div>
      <h2 {...storyblokEditable(blok)}>{blok.headline}...</h2>
    </div>
  );
};

export default Teaser;
