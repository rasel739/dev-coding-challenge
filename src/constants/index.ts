import { Icons } from '@/lib/icons';
import { IconType } from 'react-icons';

type NavDataType = {
  title: string;
  link: string;
  icon?: IconType;
};

export const navData: NavDataType[] = [
  {
    title: 'Home',
    link: '#',
  },
  {
    title: 'Products',
    link: '#',
    icon: Icons.ArrowDown,
  },
  {
    title: 'Resources',
    link: '#',
    icon: Icons.ArrowDown,
  },
  {
    title: 'Pricing',
    link: '#',
  },
];

export const companyData = [
  {
    img: 'company-logo-1.png',
  },
  {
    img: 'company-logo-2.png',
  },
  {
    img: 'company-logo-3.png',
  },
  {
    img: 'company-logo-4.png',
  },
  {
    img: 'company-logo-5.png',
  },
  {
    img: 'company-logo-6.png',
  },
];
