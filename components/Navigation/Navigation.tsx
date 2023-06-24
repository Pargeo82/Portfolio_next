import Navlinks from './Navlinks';

const Navigation = () => {
  return (
    <nav
      style={{
        position: 'fixed',
        width: '100%',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(10px)',
      }}
    >
      <Navlinks />
    </nav>
  );
};

export default Navigation;
