import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';

// Older multi-page addresses now point to sections of the single page.
const redirects = {
  about: 'about',
  departments: 'wings',
  programmes: 'events',
  events: 'events',
  updates: 'events',
  committee: 'committee',
  join: 'connect',
  contact: 'connect',
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        {Object.entries(redirects).map(([from, to]) => (
          <Route key={from} path={from} element={<Navigate to={`/#${to}`} replace />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
