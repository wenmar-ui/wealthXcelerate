import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import TVMedia from './pages/TVMedia';
import Books from './pages/Books';
import University from './pages/University';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Disclaimer from './pages/Disclaimer';

export const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/university', component: University },
  { path: '/tv', component: TVMedia },
  { path: '/books', component: Books },
  { path: '/login', component: Login },
  { path: '/contact', component: Contact },
  { path: '/privacy', component: Privacy },
  { path: '/terms', component: Terms },
  { path: '/disclaimer', component: Disclaimer },
];

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/university" element={<University />} />
      <Route path="/tv" element={<TVMedia />} />
      <Route path="/books" element={<Books />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
    </Routes>
  );
};

export default AppRoutes;
