import { ISbStoryParams, getStoryblokApi } from '@storyblok/react/rsc';
import { sbInit } from '../SbInit';

export async function fetchData() {
  let sbParams: ISbStoryParams = { version: 'draft' };

  sbInit();

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams, { cache: 'no-store' });
}
