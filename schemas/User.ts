import { list } from '@keystone-next/keystone/schema';
import { text, password, select } from '@keystone-next/fields';

export const User = list({
  fields: {
    name: text({ isRequired: true }),
    email: text({ isRequired: true, isUnique: true }),
    password: password(),
    role: text(),
    SalsaLevel: select({
      dataType: 'enum',
      options: [
        { label: 'Novice', value: '1' },
        { label: 'Beginner', value: '2' },
        { label: 'Improvers', value: '3' },
        { label: 'Intermediate', value: '4' },
        { label: 'Advanced', value: '5' },
        { label: 'Professional', value: '6' },
      ],
    }),
    RumbaLevel: select({
      dataType: 'enum',
      options: [
        { label: 'Novice', value: '1' },
        { label: 'Beginner', value: '2' },
        { label: 'Improvers', value: '3' },
        { label: 'Intermediate', value: '4' },
        { label: 'Advanced', value: '5' },
        { label: 'Professional', value: '6' },
      ],
    }),
    ChachaLevel: select({
      dataType: 'enum',
      options: [
        { label: 'Novice', value: '1' },
        { label: 'Beginner', value: '2' },
        { label: 'Improvers', value: '3' },
        { label: 'Intermediate', value: '4' },
        { label: 'Advanced', value: '5' },
        { label: 'Professional', value: '6' },
      ],
    }),
  },
  ui: {
    listView: {
      initialColumns: ['name', 'email'],
    },
  },
});
