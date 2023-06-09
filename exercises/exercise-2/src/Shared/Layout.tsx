import { ReactNode } from 'react';
import MenuAppBar from '@/Shared/MenuAppBar';
import Footer from '@/Shared/Footer';
type LayoutProps = {
  children: ReactNode;
};
const Layout1 = ({ children }: LayoutProps) => {
  return (
    <div>
      <MenuAppBar></MenuAppBar>

      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default Layout1;
