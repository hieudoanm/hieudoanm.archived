import { ReactNode } from 'react';
import Footer from '../../components/organisms/Footer';
import Navbar from '../../components/organisms/Navbar';

export type LayoutTemplateProps = {
  children?: ReactNode;
};

export const LayoutTemplate: React.FC<LayoutTemplateProps> = ({
  children = <></>,
}) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutTemplate;
