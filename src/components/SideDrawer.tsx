import { Link, useLocation } from 'react-router-dom';

const SideDrawer = () => {
  const location = useLocation();

  const drawerStyles: React.CSSProperties = {
    backgroundColor: '#1f1f1f',
    color: '#fff',
    width: '200px',
    height: '100vh',
    padding: '20px',
    boxSizing: 'border-box',
  };

  const headerStyles = {
    marginBottom: '20px',
  };

  const navStyles = {
    listStyleType: 'none',
    padding: 0,
  };

  const linkStyles = {
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
    textDecoration: 'none',
    padding: '10px',
    borderRadius: '5px',
    transition: 'background-color 0.1s ease',
    marginBottom: '10px',
  };

  const activeLinkStyles = {
    backgroundColor: '#c08100',
  };

  const iconStyles = {
    marginRight: '10px',
  };

  return (
    <div style={drawerStyles}>
      <div style={headerStyles}>
        <h2>Marvin</h2>
      </div>
      <nav>
        <ul style={navStyles}>
          <li style={location.pathname === '/dashboard' ? { ...linkStyles, ...activeLinkStyles } : linkStyles}>
            <Link to="/dashboard">
              <i className="fas fa-tachometer-alt" style={iconStyles}></i>
              Dashboard
            </Link>
          </li>
          <li style={location.pathname === '/dashboard/tokenlist' ? { ...linkStyles, ...activeLinkStyles } : linkStyles}>
            <Link to="/dashboard/tokenlist">
              <i className="fas fa-list" style={iconStyles}></i>
              Token List
            </Link>
          </li>
          <li style={location.pathname === '/dashboard/addtoken' ? { ...linkStyles, ...activeLinkStyles } : linkStyles}>
            <Link to="/dashboard/addtoken">
              <i className="fas fa-plus" style={iconStyles}></i>
              Add Token
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideDrawer;