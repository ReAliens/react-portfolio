import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import About from '../pages/About';
import Contact from '../pages/Contact';
import History from '../pages/History';
import Home from '../pages/Home';
import Skills from '../pages/Skills';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="contact" element={<Contact />} />
        <Route path="history" element={<History />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
