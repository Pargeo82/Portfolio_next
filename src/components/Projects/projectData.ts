import { StaticImageData } from 'next/image';
import { TechnoTypes } from '../../types/technoTypes';

import maiImage from '@/public/projects/mai1.png';
import cedeterijaImage from '@/public/projects/cedeterija1.png';
import gtImage from '@/public/projects/gt1.png';
import portfolioImage from '@/public/projects/portfolio1.png';
import PdImage from '@/public/projects/Pd1.png';
import marolijaImage from '@/public/projects/marolija1.png';
import harmonieImage from '@/public/projects/harmonie1.png';

export type Project = {
  id: number;
  name: string;
  image: StaticImageData;
  title: string;
  description: string;
  technology: TechnoTypes[];
  link: string;
  outsideLink: boolean;
  longerDescription: string;
  imageArray?: StaticImageData[];
  linkTitle?: string;
  url?: string;
  gitUrl?: string;
};

const projectData = [
  {
    id: 1,
    name: 'Pargeo Design',
    image: PdImage,
    title: 'My web agency site',
    description: 'I have decided to start a small business',
    technology: [TechnoTypes.TypeScript, TechnoTypes.NextJS, TechnoTypes.Figma, TechnoTypes.MaterialUI],
    link: 'Pd',
    outsideLink: false,
    longerDescription:
      'I have decided to become an entrepreneur and start a small business. I have made a website for it, fully designed in figma, then made in NextJS 14 (new image component and router). It has been made with TypeScript, and MaterialUI. It is fully responsive and has been tested on multiple devices and browsers. It has been made with SEO in mind, and added Schema.org entries. Also the added blog is done with MDX. It has web forms set, validation in zod, with mailjet integration, and review redirect to google company profile (former google my business).',
    linkTitle: 'Pargeo Design',
    url: 'https://www.pargeo-design.hr/',
  },
  {
    id: 2,
    name: 'Marolija',
    image: marolijaImage,
    title: 'Marolija',
    description: "Virtual assistant's website",
    technology: [TechnoTypes.TypeScript, TechnoTypes.NextJS, TechnoTypes.Figma, TechnoTypes.MaterialUI],
    link: 'marolija',
    outsideLink: false,
    longerDescription: "Virtual assistant's website",
    linkTitle: 'Marolija',
    url: 'https://www.marolija.hr/',
  },
  {
    id: 3,
    name: 'Harmonie',
    image: harmonieImage,
    title: 'Harmonie',
    description: 'Local beauty salon website',
    technology: [TechnoTypes.TypeScript, TechnoTypes.NextJS, TechnoTypes.Figma, TechnoTypes.MaterialUI],
    link: 'harmonie',
    outsideLink: false,
    longerDescription: 'Local beauty salon website',
    linkTitle: 'Harmonie',
    url: 'https://www.ks-harmonie.hr/',
  },
  {
    id: 3,
    name: 'Mai beauty salon',
    image: maiImage,
    title: 'Beauty salon website',
    description: 'Local small business, just opened',
    technology: [TechnoTypes.TypeScript, TechnoTypes.NextJS, TechnoTypes.Figma, TechnoTypes.MaterialUI],
    link: 'mai',
    outsideLink: false,
    longerDescription:
      'Website for a local small business that has just opened. Project has been fully designed in figma, then made in NextJS 14 (new image component and router). It has been made with TypeScript, and MaterialUI. It is fully responsive and has been tested on multiple devices and browsers. It has been made with SEO in mind, and has been tested with google crawler. It has been deployed on Vercel.',
    linkTitle: 'Beauty salon Mai',
    url: 'https://www.ks-mai.hr/',
  },
  {
    id: 4,
    name: 'Cedeterija',
    image: cedeterijaImage,
    title: 'Discogs album fetcher',
    description: 'Data fetcher from discogs API, to input data into POS database',
    technology: [TechnoTypes.TypeScript, TechnoTypes.CSS, TechnoTypes.NextJS],
    link: 'cedeterija',
    outsideLink: false,
    longerDescription:
      "At previous job a problem I wanted to resolve was when receiving new albums that we've never had before, there is a lot of data required to manually input. POS system is somewhat old and it requires .csv file input to populate the data, and a really long column table for it. I realized I could fetch data from discogs (which is maybe the biggest online music data library and marketplace), and use that data to populate the table and the file to import in POS",
    linkTitle: 'Cedeterija app',
    url: 'https://cedeterija.vercel.app/',
    gitUrl: 'https://github.com/Pargeo82/cedeterija',
  },
  {
    id: 6,
    name: 'GT',
    image: gtImage,
    title: 'Bar online menu',
    description: 'Mobile-first online menu for a bar',
    technology: [TechnoTypes.CSS, TechnoTypes.MongoDB, TechnoTypes.NextJS],
    link: 'gt',
    outsideLink: false,
    longerDescription:
      "This is an online bar manu for a bar in Zaprešić. It has a dashboard where admins (me and the bar owner) have CRUD capabilities for articles, and the 'special offer' at the beginning of the page. It has been written in NextJS and database is MongoDB (Atlas). It is mobile-first site.",
    linkTitle: 'Caffe Bar GT',
    url: 'https://www.caffebargt-martinko.hr/',
  },
  {
    id: 7,
    name: 'Portfolio',
    image: portfolioImage,
    title: 'Portfolio site',
    description: 'Latest iteration done with TypeScript, MUI and NextJS',
    technology: [TechnoTypes.TypeScript, TechnoTypes.MaterialUI, TechnoTypes.NextJS],
    link: 'portfolio',
    outsideLink: false,
    longerDescription:
      "This is a project that had many iterations. I started it in vanilla JS, but as the time passed by it got remade and remade. This is the look I'm currently most satisfied with, not too complex, but clean. NextJS got picked because it has great SEO from the box. I have also spent significant amount of time on making google crawler work on it, did a lot of accessibility tests and speed tests, so it would get as optimized as possible. After a while I have decided to add typescript to the project, and Sass to make it more robust and easier to maintain. MaterialUI was the next step in the iteration",
    gitUrl: 'https://github.com/Pargeo82/Portfolio_next',
  },
];

export default projectData;
