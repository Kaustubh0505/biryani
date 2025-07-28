import { Routes, Route } from 'react-router-dom';
import OurStory from './ourStory.jsx';
import PopularDishes from './popularDishes.jsx';
import HomePage from './home.jsx';
import Menu from './menu.jsx';
import './App.css';
import Contact from './contact.jsx';

function App() {
  const HomeContent = (
    <>
      <HomePage />
      <PopularDishes />
      <OurStory />
    </>
  );

  return (
    <Routes>
      <Route path="/" element={HomeContent} />
      <Route path="/home" element={HomeContent} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
