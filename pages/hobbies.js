import Navbar from "../components/Navigation/Navbar";
import Hobbies from "../components/Hobbies/hobbies";
import hobbiesData from "../components/Hobbies/hobbies_data";
import Footer from "../components/Footer/Footer";

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
    <div className="content">
      <Navbar />
      <div className="container">
        <h1 className="h1-title">Hobbies</h1>
        <div className="flex">{hobbiesElements}</div>
      </div>
      <Footer />
    </div>
  );
}
