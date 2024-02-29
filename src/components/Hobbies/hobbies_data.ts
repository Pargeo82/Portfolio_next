import breadImage from '@/public/hobbies/bread.jpg';
import foodImage1 from '@/public/hobbies/food1.png';
import foodImage2 from '@/public/hobbies/food2.jpg';
import foodImage3 from '@/public/hobbies/food3.png';
import foodImage4 from '@/public/hobbies/food4.jpg';
import foodImage5 from '@/public/hobbies/food5.jpg';
import basilImage from '@/public/hobbies/basil.jpg';

const hobbiesData = [
  {
    id: 1,
    image: breadImage,
    name: 'Baking sourdough bread',
    description: 'Baking is fun, and the bread has only 4 ingredients: flour, yeast, water and salt',
  },
  {
    id: 2,
    image: foodImage1,
    name: 'Sourdough pastries',
    description: "My sourdough starter's name is Đurđica",
  },
  {
    id: 3,
    image: foodImage3,
    name: 'Preparations for making cherry jam',
    description: 'Kids help with cherry picking...',
  },
  {
    id: 4,
    image: foodImage4,
    name: 'Cooking cherry jam',
    description: '... and making the jam',
  },
  {
    id: 5,
    image: foodImage2,
    name: 'Baking a focaccia',
    description: "It's more forgiving than the pizza dough",
  },
  {
    id: 6,
    image: foodImage5,
    name: 'Baking a Guinness cake',
    description: 'Beer and cake, great combo',
  },
  {
    id: 7,
    image: basilImage,
    name: 'Growing herbs (basil)',
    description: 'There is nothing better than putting some fresh herbs on your home-cooked meal',
  },
];

export default hobbiesData;
