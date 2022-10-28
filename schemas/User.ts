import { list } from '@keystone-next/keystone/schema';
import { text, password, select } from '@keystone-next/fields';

export const User = list({
  fields: {
    name: text({ isRequired: true }),
    email: text({ isRequired: true, isUnique: true }),
    password: password(),
    role: text(),
    level: select({
      dataType: 'enum',
      options: [
        { label: 'beginner', value: 'beginner' },
        { label: 'improver', value: 'improver' },
        { label: 'advance', value: 'advance' },
      ],
    }),
  },
  ui: {
    listView: {
      initialColumns: ['name', 'email'],
    },
  },
});
