import React from 'react';

export const Container: React.FC<{ children?: React.ReactNode }> = ({
  children = <></>,
}) => {
  return <div className="mx-auto px-8 container">{children}</div>;
};

Container.displayName = 'Container';

export default Container;
