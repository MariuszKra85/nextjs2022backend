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
        { label: 'beginner', value: '1' },
        { label: 'improver', value: '2' },
        { label: 'advance', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
      ],
    }),
  },
  ui: {
    listView: {
      initialColumns: ['name', 'email'],
    },
  },
});
