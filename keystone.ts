import { createAuth } from '@keystone-next/auth';
import { config, createSchema } from '@keystone-next/keystone/schema';
import {
  withItemData,
  statelessSessions,
} from '@keystone-next/keystone/session';
import { User } from './schemas/User';
import { VideosLib } from './schemas/VideosLib';
import { HomePageElement } from './schemas/HomepageElement';
import { NamedLink } from './schemas/NamedLink';
import { PicturesLib } from './schemas/PicturesLib';
import { TeachersLib } from './schemas/TeachersLib';
import { SalsaClass } from './schemas/SalsaClass';
import 'dotenv/config';
import { sendPasswordResetEmail } from './lib/mail';

const databaseURL = process.env.DATABASE_URL;

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360,
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
    // TODO: Add in initial roles here
  },
  passwordResetLink: {
    async sendToken(args) {
      // send the email
      await sendPasswordResetEmail(args.token, args.identity);
    },
  },
});

export default withAuth(
  config({
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
    },
    db: {
      adapter: 'mongoose',
      url: databaseURL,
      // eslint-disable-next-line @typescript-eslint/require-await, no-unused-vars, @typescript-eslint/no-unused-vars
      async onConnect(keystone) {
        console.log('Connected to the database!');
      },
    },
    lists: createSchema({
      // Schema items go in here
      User,
      HomePageElement,
      SalsaClass,
      VideosLib,
      PicturesLib,
      TeachersLib,
      NamedLink,
    }),
    ui: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      isAccessAllowed: ({ session }) => !!session?.data,
    },
    session: withItemData(statelessSessions(sessionConfig), {
      User: 'id name email',
    }),
  })
);
