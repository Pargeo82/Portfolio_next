import Navbar from '../components/Navigation/Navbar';
import Hobbies from '../components/Hobbies/Hobbies';
import hobbiesData from '../components/Hobbies/hobbies_data';
import Footer from '../components/Footer/Footer';
import styles from '../components/Hobbies/hobbies.module.css';

export default function HobbiesPage() {
  const hobbiesElements = hobbiesData.map((hobby) => {
    return (
      <Hobbies
        key={hobby.id}
        image={hobby.image}
        name={hobby.name}
        description={hobby.description}
      />
    );
  });
  return (
    <div className='content'>
      <div className='container'>
        <h1 className={`h1-title, ${styles.main}`}>Hobbies</h1>
        <div className='flex'>{hobbiesElements}</div>
      </div>
    </div>
  );
}
