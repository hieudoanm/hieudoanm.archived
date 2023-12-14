import Chip from '@mui/material/Chip';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Project: React.FC<{
  image: StaticImageData;
  title?: string;
  description?: string;
  url?: string;
  technologies?: string[];
}> = ({ image, title = '', description = '', url = '', technologies = [] }) => {
  return (
    <div className="transition-all duration-100 hover:border hover:p-4 hover:shadow">
      <Link href={url} target="_blank" className="block">
        <div
          className="aspect-video rounded border bg-cover bg-center"
          style={{ backgroundImage: `url(${image.src})` }}
        />
        <h2 className="mt-4 text-lg font-bold">{title}</h2>
      </Link>
      <p className="mt-4 text-gray-500">{description}</p>
      <div className="mt-4">
        {technologies.map((technology) => (
          <Chip
            key={technology}
            label={technology}
            variant="filled"
            size="small"
            className="bg-emerald-500 text-white"
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
