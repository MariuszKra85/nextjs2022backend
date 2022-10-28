import { list } from '@keystone-next/keystone/schema';
import { text } from '@keystone-next/fields';

export const PicturesLib = list({
  fields: {
    name: text({ isRequired: true }),
    url: text({ isRequired: true }),
  },
  ui: {
    listView: {
      initialColumns: ['name'],
    },
  },
});
