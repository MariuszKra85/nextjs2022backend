import { list } from '@keystone-next/keystone/schema';
import { relationship, text } from '@keystone-next/fields';

export const HomePageElement = list({
  fields: {
    where: text({ isRequired: true }),
    title: text(),
    text: text(),
    link: relationship({ ref: 'NamedLink', many: true }),
    video: relationship({ ref: 'VideosLib', many: true }),
    picture: relationship({ ref: 'PicturesLib', many: true }),
  },
  ui: {
    listView: {
      initialColumns: ['where', 'text', 'link', 'video', 'picture'],
    },
  },
});
