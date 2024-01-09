import { A } from '@solidjs/router';
import { Component, JSX } from 'solid-js';

const isProd: boolean = process.env.NODE_ENV === 'production';
const base: string = isProd ? '/solid-template' : '';

export type LinkProps = {
  href?: string;
  className?: string;
  children?: JSX.Element;
};

export const Link: Component<LinkProps> = (_props) => {
  const props = mergeProps(
    { href: '/', className: '', children: <></> },
    _props
  );
  return (
    <A href={`${base}${props.href}`} class={props.className}>
      {props.children}
    </A>
  );
};

export default Link;
