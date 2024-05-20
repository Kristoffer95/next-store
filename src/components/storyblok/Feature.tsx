import type { FeatureStoryblok } from '@/types/storyblok/component-types';
import { storyblokEditable } from '@storyblok/react/rsc';

const Feature = ({ blok }: { blok: FeatureStoryblok }) => (
  <div {...storyblokEditable(blok)}>{blok.name}</div>
);

export default Feature;
