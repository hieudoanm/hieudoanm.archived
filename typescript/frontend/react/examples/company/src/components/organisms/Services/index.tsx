import Container from '@mui/material/Container';
import { StaticImageData } from 'next/image';
import React from 'react';
import { Heading } from '../../atoms/Heading';
import { Service } from '../../molecules/Service';

export type ServiceType = {
  id: string;
  image: StaticImageData;
  title: string;
  description: string;
};

export const Services: React.FC<{
  title: string;
  description: string;
  services: ServiceType[];
}> = ({
  title: sectionTitle = '',
  description: sectionDescription = '',
  services = [],
}) => {
  return (
    <section id="services" className="bg-[#FFF5ED]/50 py-8 md:py-16">
      <Container>
        <Heading title={sectionTitle} description={sectionDescription} />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {services.map(({ id, image, title, description }: ServiceType) => {
            return (
              <Service
                key={id}
                image={image}
                title={title}
                description={description}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
};
