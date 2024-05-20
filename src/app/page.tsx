// import TestComp from '@/components/home/testComp';
import {
  ISbStoryParams,
  StoryblokStory,
  getStoryblokApi,
} from '@storyblok/react/rsc';

export default async function Home({
  blok,
}: {
  blok: {
    _uid: string;
    body: any[];
  };
}) {
  const { data } = await fetchData();

  return (
    <div>
      {/* <div className='container py-10'>
        <h1>Home Page</h1>
        <h1>Story: {data.story.name}</h1>
      </div> */}
      <StoryblokStory story={data.story} />
      {/* <pre>{JSON.stringify(data.story, null, 2)}</pre> */}
      {/* <TestComp /> */}
    </div>
  );
}

export async function fetchData() {
  let sbParams: ISbStoryParams = { version: 'draft' };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams, { cache: 'no-store' });
}
// storyblok pull-components --space 3000339
// storyblok generate-typescript-typedefs --sourceFilePaths ./components.3000339.json --destinationFilePath ./component-types-sb.d.ts
