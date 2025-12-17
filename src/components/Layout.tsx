import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout: React.FC = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      
      {/* 사이드바 너비(250px)만큼 띄우고 나머지 영역 사용 */}
      <main style={{ 
        marginLeft: '250px', 
        width: 'calc(100% - 250px)', 
        minHeight: '100vh', 
        background: '#f5f6fa', // 전체 배경색
        boxSizing: 'border-box'
      }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;