import { PropsWithChildren } from 'react';

import Footer from '../Footer';
import Header from '../Header';

type DefaultLayoutProps = PropsWithChildren;

const Default = (props: DefaultLayoutProps) => {
  const { children } = props;
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Default;
