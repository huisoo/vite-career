import React from 'react';

const Home: React.FC = () => {
  return (
    <div style={{ padding: '3rem' }}>
      <h1 style={{ color: '#2c3e50' }}>👋 안녕하세요!</h1>
      <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.6' }}>
        나의 커리어 성장을 기록하는 대시보드입니다.<br/>
        왼쪽 메뉴에서 <strong>'연봉 성장 지수'</strong>를 클릭하여 상세 차트를 확인해보세요.
      </p>
    </div>
  );
};

export default Home;