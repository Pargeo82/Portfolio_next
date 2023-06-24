import { TechnoTypes } from '../../types/technoTypes';

const projectData = [
  {
    id: 1,
    name: 'Cedeterija',
    image: 'projects/cedeterija.png',
    title: 'Discogs album fetcher',
    description: 'Data fetcher from discogs API, to input data into POS database',
    technology: [TechnoTypes.TypeScript, TechnoTypes.CSS, TechnoTypes.NextJS],
    link: 'cedeterija',
    outsideLink: false,
    imageArray: ['/projects/gt1.png', '/projects/cedeterija3.png'],
    longerDescription: `At previous job a problem I wanted to resolve was when receiving new albums that we've never had before, there is a lot of data required to manually input. POS system is somewhat old and it requires .csv file input to populate the data, and a really long column table for it. I realized I could fetch data from discogs (which is maybe the biggest online music data library and marketplace), and use that data to populate the table and the file to import in POS`,
    linkTitle: 'Cedeterija app',
    url: 'https://cedeterija.vercel.app/',
    gitUrl: 'https://github.com/Pargeo82/cedeterija',
  },
  {
    id: 2,
    name: 'GT',
    image: 'projects/projectGt.png',
    title: 'Bar online menu',
    description: 'Mobile-first online menu for a bar',
    technology: [TechnoTypes.CSS, TechnoTypes.MongoDB, TechnoTypes.NextJS],
    link: 'gt',
    outsideLink: false,
    imageArray: ['/projects/gt1.png', '/projects/gt2.png'],
    longerDescription: `This is an online bar manu for a bar in Zaprešić. It has a dashboard where admins (me and the bar owner) have CRUD capabilites for articles, and the "special offer" at the beginning of the page. It has been written in NextJS and database is MongoDB (Atlas). It is mobile-first site.`,
    linkTitle: 'Caffe Bar GT',
    url: 'https://www.caffebargt-martinko.hr/',
  },
  {
    id: 3,
    name: 'Portfolio',
    image: 'projects/portfolio.jpg',
    title: 'Portofolio site',
    description: 'Latest iteration done with TypeScript, MUI and NextJS',
    technology: [TechnoTypes.TypeScript, TechnoTypes.MaterialUI, TechnoTypes.NextJS],
    link: 'portfolio',
    outsideLink: false,
    imageArray: ['/projects/portfolio.jpg', '/projects/portfolio2.png'],
    longerDescription: `This is a project that had many iterations. I started it in vanilla JS, but as the time passed by it got remade and remade. This is the look I'm currently most satisfied with, not too complex, but clean. NextJS got picked because it has great SEO from the box. I have also spent significant amount of time on making google crawler work on it, did a lot of accessibility tests and speed tests, so it would get as optimized as possible. After a while I have decided to add typescript to the project, and Sass to make it more robust and easier to maintain. MaterialUI was the next step in the iteration`,
    gitUrl: 'https://github.com/Pargeo82/Portfolio_next',
  },
];

export default projectData;
