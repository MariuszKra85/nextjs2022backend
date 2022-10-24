import { list } from '@keystone-next/keystone/schema';
import { relationship, text } from '@keystone-next/fields';

export const HomePage = list({
  fields: {
    title: text({ isRequired: true }),
    paragraph: text({ isRequired: true }),
    link: relationship({ ref: 'NamedLink' }),
  },
  ui: {
    listView: {
      initialColumns: ['title'],
    },
  },
});
