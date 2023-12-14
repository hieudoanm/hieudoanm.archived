import Container from '@mui/material/Container';
import React from 'react';
import { Heading } from '../../atoms/Heading';
import { Project } from '../../molecules/Project';

export const Portfolio: React.FC<{
  title: string;
  description: string;
  projects: any[];
}> = ({
  title: sectionTitle = '',
  description: sectionDescription = '',
  projects = [],
}) => {
  return (
    <section id="projects" className="py-8 md:py-16">
      <Container>
        <Heading title={sectionTitle} description={sectionDescription} />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {projects.map(
            ({ id, url, image, title, description, technologies }) => (
              <Project
                key={id}
                url={url}
                image={image}
                title={title}
                description={description}
                technologies={technologies}
              />
            )
          )}
        </div>
      </Container>
    </section>
  );
};
