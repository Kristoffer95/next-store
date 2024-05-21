import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';

const Page = ({
  blok,
}: {
  blok: {
    body: any[];
  };
}) => (
  <main {...storyblokEditable(blok)}>
    {blok.body.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Page;