import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import WingsPage from './pages/WingsPage.jsx';
import Programmes from './pages/Programmes.jsx';
import Gallery from './pages/Gallery.jsx';
import ConnectPage from './pages/ConnectPage.jsx';
import NotFound from './pages/NotFound.jsx';

// Older addresses from earlier versions of the site.
const redirects = {
  departments: '/wings',
  events: '/programmes',
  updates: '/programmes',
  committee: '/connect#committee',
  join: '/connect',
  contact: '/connect',
};

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="wings" element={<WingsPage />} />
        <Route path="programmes" element={<Programmes />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="connect" element={<ConnectPage />} />
        {Object.entries(redirects).map(([from, to]) => (
          <Route key={from} path={from} element={<Navigate to={to} replace />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
