import { list } from '@keystone-next/keystone/schema';
import { text } from '@keystone-next/fields';

export const HomePage = list({
  fields: {
    title: text({ isRequired: true }),
    paragraph: text({ isRequired: true }),
  },
  ui: {
    listView: {
      initialColumns: ['title'],
    },
  },
});
