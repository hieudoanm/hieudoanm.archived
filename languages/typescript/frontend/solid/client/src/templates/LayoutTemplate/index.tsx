import { Component, JSX, mergeProps } from 'solid-js';
import Footer from '../../components/organisms/Footer';
import Navbar from '../../components/organisms/Navbar';

export type LayoutTemplateProps = {
  children?: JSX.Element;
};

export const LayoutTemplate: Component<LayoutTemplateProps> = (_props) => {
  const props = mergeProps({ children: <></> }, _props);
  return (
    <div class="flex min-h-screen flex-col">
      <Navbar />
      <main class="grow">{props.children}</main>
      <Footer />
    </div>
  );
};

export default LayoutTemplate;
