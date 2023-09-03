'use client';

import type {FC} from 'react';

import {AnimatePresence} from 'framer-motion';
import {Provider} from 'react-redux';

import {HomeLayout} from '@layouts';
import {store} from '@state/store';

import '@styles';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({children}) => (
  <AnimatePresence mode="wait">
    <Provider store={store}>
      <html lang="en">
        <head>
          <meta name="description" content="an event builder" />
          <title>Swenson-he Event Builder</title>
        </head>

        <body>
          <HomeLayout>{children}</HomeLayout>
        </body>
      </html>
    </Provider>
  </AnimatePresence>
);

export default RootLayout;
