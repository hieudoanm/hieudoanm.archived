import { Link } from 'gatsby';
import React, { ReactNode } from 'react';

export type SocialLink = {
  id: string;
  link: string;
  icon: ReactNode;
};

export const Footer: React.FC<{
  title: string;
  socialLinks: SocialLink[];
}> = ({ title = '', socialLinks = [] }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t py-8 md:border-none">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="font-lg font-medium">
            &copy; {year} {title}
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            {socialLinks.map(({ id, link, icon }: SocialLink) => {
              return (
                <Link key={id} to={link} target={'_blank'}>
                  {icon}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
