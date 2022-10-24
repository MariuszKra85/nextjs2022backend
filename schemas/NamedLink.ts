import { list } from '@keystone-next/keystone/schema';
import { text } from '@keystone-next/fields';

export const NamedLink = list({
  fields: {
    name: text({ isRequired: true }),
    link: text({ isRequired: true }),
  },
  ui: {
    listView: {
      initialColumns: ['name', 'link'],
    },
  },
});
