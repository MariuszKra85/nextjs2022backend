import { list } from '@keystone-next/keystone/schema';
import { text } from '@keystone-next/fields';

export const TeachersLib = list({
  fields: {
    name: text({ isRequired: true }),
    description: text({ isRequired: true }),
    photo: text(),
    videos: text(),
    role: text(),
    phone: text(),
    web: text(),
    address: text(),
    email: text(),
  },
  ui: {
    listView: {
      initialColumns: ['name', 'role'],
    },
  },
});
