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
  <AnimatePresence>
    <Provider store={store}>
      <html lang="en">
        <body>
          <HomeLayout>{children}</HomeLayout>
        </body>
      </html>
    </Provider>
  </AnimatePresence>
);

export default RootLayout;
