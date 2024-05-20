import { TextContentStoryblok } from '@/types/storyblok/component-types';
import { accentFont } from '@/utils/fonts';

function TextContent({ blok }: { blok: TextContentStoryblok }) {
  return (
    <div className='container py-[80px] flex justify-center'>
      <p
        className={`max-w-[900px] leading-[1.7] tracking-wide text-center text-lg ${accentFont.className}`}>
        {blok.content}
      </p>
    </div>
  );
}

export default TextContent;
