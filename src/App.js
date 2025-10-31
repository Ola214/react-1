import Container from './components/Container/Container.js';
import NavBar from './components/NavBar/NavBar.js';
import About from './components/About/About.js';
import Favourite from './components/Favourite/Favourite.js';
import Home from './components/Home/Home.js';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound.js';

const App = () => {
  return (
    <main>
     <NavBar />
     <Container>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favourite />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
     </Container>
   </main>
  );
};

export default App;