/** 1. Tag it as a client component */
'use client';
import { sbInit } from '@/utils/SbInit';

import Page from './page';
import Teaser from './Teaser';
import Feature from './Feature';
import Grid from './Grid';
//
import PageHero from './page-hero';
import TextContent from './text-content';
import ImageContent from './image-content';

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  page_hero: PageHero,
  text_content: TextContent,
  image_content: ImageContent,
};

/** 2. Initialize it as usual */
sbInit(components);

export default function StoryblokProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
