import './App.css';
import { useEffect, useState } from 'react';
import Movie from './Movie';
import Filter from './filter';
import { motion, AnimatePresence } from "framer-motion";

function App() {

  const [popular, setpopular] = useState([]);
  const [filtered, setfiltered] = useState([]);
  const [activeGenre, setActiverGenre] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=49f0812d67211057b460c5bce3e067a4&language=en-US&page=1')
    const movies = await data.json();
    // console.log(movies);
    setpopular(movies.results);
    setfiltered(movies.results)
  }

  return (
    <div className='App'>
      <Filter popular={popular} animate={{ opacity: 1 }} setfiltered={setfiltered}
        activeGenre={activeGenre} setActiverGenre={setActiverGenre} />
      <motion.div layout
        className='popular-movies'>
        <AnimatePresence>
          {
            filtered.map(movie => {
              return <Movie key={movie.id} movie={movie} />
            })
          }
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
