import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';

export const sbInit = (components?: {
  [key: string]: React.ComponentType<any>;
}) => {
  storyblokInit({
    accessToken: process.env.ACCESS_TOKEN,
    use: [apiPlugin],
    apiOptions: {
      region: 'ap',
    },
    components,
  });
};
