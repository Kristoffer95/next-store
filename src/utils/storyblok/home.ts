import { ISbStoryParams, getStoryblokApi } from '@storyblok/react/rsc';

export async function fetchData() {
  let sbParams: ISbStoryParams = { version: 'draft' };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(
    `cdn/stories/home`,
    sbParams
    // { cache: 'no-store' }
  );
}
