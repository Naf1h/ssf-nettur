import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Departments from './pages/Departments.jsx';
import Programmes from './pages/Programmes.jsx';
import Join from './pages/Join.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="departments" element={<Departments />} />
        <Route path="programmes" element={<Programmes />} />
        <Route path="join" element={<Join />} />
        {/* Old addresses from earlier versions */}
        <Route path="committee" element={<Navigate to="/about#committee" replace />} />
        <Route path="events" element={<Navigate to="/programmes" replace />} />
        <Route path="updates" element={<Navigate to="/programmes" replace />} />
        <Route path="contact" element={<Navigate to="/join" replace />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
