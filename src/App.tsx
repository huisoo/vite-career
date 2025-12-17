import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import SalaryPage from './pages/SalaryPage';
// import './App.css'; // 전역 스타일이 필요하면 유지, 아니면 삭제

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout이 공통 틀 역할 */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="salary" element={<SalaryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;