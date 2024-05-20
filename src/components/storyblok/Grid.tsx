import type { GridStoryblok } from '@/types/storyblok/component-types';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';

const Grid = ({ blok }: { blok: GridStoryblok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      {blok?.columns?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default Grid;
