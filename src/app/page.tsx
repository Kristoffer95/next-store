// import TestComp from '@/components/home/testComp';
import { fetchData } from '@/utils/storyblok/home';
import { StoryblokStory } from '@storyblok/react/rsc';

export const revalidate = 60 * 30; // 30 minutes

export default async function Home() {
  const { data } = await fetchData();

  return (
    <div>
      <StoryblokStory story={data.story} />
    </div>
  );
}
