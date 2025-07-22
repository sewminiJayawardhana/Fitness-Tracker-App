import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation();

  if (pathname === '/') return null; // hide on landing page

  return (
    <nav style={styles.nav}>
      <Link to="/home" style={styles.link}>🏠 Home</Link>
      <Link to="/log" style={styles.link}>📝 Log</Link>
      <Link to="/progress" style={styles.link}>📊 Progress</Link>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '10px',
    background: '#f0f0f0',
    borderTop: '1px solid #ccc',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
  },
};

export default Navbar;
