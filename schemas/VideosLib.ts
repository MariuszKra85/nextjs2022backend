import { list } from '@keystone-next/keystone/schema';
import { select, text } from '@keystone-next/fields';

export const VideosLib = list({
  fields: {
    name: text({ isRequired: true }),
    description: text({ isRequired: true, isUnique: true }),
    url: text({ isRequired: true }),
    level: select({
      dataType: 'enum',
      options: [
        { label: 'level 1', value: '1' },
        { label: 'level 2', value: '2' },
        { label: 'level 3', value: '3' },
        { label: 'level 4', value: '4' },
        { label: 'level 5', value: '5' },
        { label: 'level 6', value: '6' },
      ],
    }),
    type: select({
      dataType: 'enum',
      options: [
        { label: 'salsa', value: 'salsa' },
        { label: 'rumba', value: 'rumba' },
        { label: 'cha-cha', value: 'cha-cha' },
        { label: 'level 4', value: 'level 4' },
        { label: 'level 5', value: 'level 5' },
        { label: 'level 6', value: 'level 6' },
      ],
    }),
  },
  ui: {
    listView: {
      initialColumns: ['name', 'description', 'type', 'level'],
    },
  },
});
