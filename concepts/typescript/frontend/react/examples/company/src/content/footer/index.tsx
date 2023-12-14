import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

export const footer = {
  socialLinks: [
    {
      id: 'facebook',
      link: 'https://facebook.com',
      icon: <FacebookIcon fontSize="medium" className="text-[#1877f2]" />,
    },
    {
      id: 'twitter',
      link: 'https://twitter.com',
      icon: <TwitterIcon fontSize="medium" className="text-[#1da1f2]" />,
    },
    {
      id: 'github',
      link: 'https://github.com',
      icon: <GitHubIcon fontSize="medium" className="text-[#333333]" />,
    },
  ],
};
