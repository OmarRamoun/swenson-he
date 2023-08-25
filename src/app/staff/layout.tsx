import type {FC} from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({children}) => (
  <div>
    <main>
      <h2>staff</h2>
      {children}
    </main>
  </div>
);

export default Layout;
