import React from 'react';

export const Section: React.FC<{ id?: string; children?: React.ReactNode }> = ({
  id = '',
  children = <></>,
}) => {
  return (
    <section id={id} className="py-16">
      {children}
    </section>
  );
};

Section.displayName = 'Section';
Section.defaultProps = { children: <></> };

export default Section;
