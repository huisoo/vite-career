import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    { name: '🏠 홈 (대시보드)', path: '/' },
    { name: '💰 연봉 성장 지수', path: '/salary' },
    // 추후 추가 예: { name: '📁 포트폴리오', path: '/portfolio' }
  ];

  return (
    <nav style={styles.sidebar}>
      <h2 style={styles.logo}>My Career</h2>
      <ul style={styles.menuList}>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <li key={item.path} style={styles.menuItem}>
              <Link 
                to={item.path} 
                style={{
                  ...styles.link,
                  background: isActive ? '#34495e' : 'transparent',
                  fontWeight: isActive ? 'bold' : 'normal'
                }}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  sidebar: {
    width: '250px',
    height: '100vh',
    background: '#2c3e50',
    color: '#fff',
    padding: '20px',
    position: 'fixed',
    left: 0,
    top: 0,
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    borderRight: '1px solid #1a252f',
  },
  logo: {
    marginBottom: '40px',
    textAlign: 'center',
    fontSize: '1.5rem',
    color: '#ecf0f1',
  },
  menuList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  menuItem: {
    marginBottom: '8px',
  },
  link: {
    display: 'block',
    textDecoration: 'none',
    color: '#bdc3c7',
    padding: '12px 15px',
    borderRadius: '8px',
    transition: 'all 0.2s',
  }
};

export default Sidebar;