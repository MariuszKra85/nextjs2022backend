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
        { label: 'beginner', value: 'beginner' },
        { label: 'improver', value: 'improver' },
        { label: 'advance', value: 'advance' },
      ],
    }),
  },
  ui: {
    listView: {
      initialColumns: ['name', 'description', 'level'],
    },
  },
});
