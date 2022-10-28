import { list } from '@keystone-next/keystone/schema';
import { relationship, text } from '@keystone-next/fields';

export const SalsaClass = list({
  fields: {
    title: text({ isRequired: true }),
    text: text({ isRequired: true }),
    picture: relationship({ ref: 'PicturesLib' }),
  },
  ui: {
    listView: {
      initialColumns: ['title'],
    },
  },
});
