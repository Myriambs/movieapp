import './App.css';
import MovieAdd from './composants /MovieAdd';
import MovieList from './composants /MovieList';
import MovieSearch from './composants /MovieSearch';
import AsideMovie from './composants /AsideMovie'
import {movies} from "./data"
import { useState } from 'react';
import './App.css'
import TopBar from './composants /TopBar';
import Footer from './composants /Footer';
import TitleBar from './composants /TitleBar';
function App() {

  const [movieList,setMovieList]=useState(movies)

  const [searchTitle,setSearchTitle]=useState('')
  console.log('movieList',movieList)


const removeMovie=(idM)=>{
setMovieList(
  movieList.filter((el)=> el.id !== idM)
)
}

const addMovie=(newMovie)=>{
  setMovieList([...movieList,newMovie])
}


  return (
    <div className="App">


<>
  <div className="window-margin">
    <div className="window">
    <AsideMovie/>
      <div className="main" role="main">
      <TopBar/>
             <div className="movie-list">
         <TitleBar/>
          
         <MovieSearch  setSearchTitle={setSearchTitle}   /> 

<MovieList removeMovie={removeMovie}  movieList={movieList}  searchTitle={searchTitle}   />

<MovieAdd  addMovie={addMovie}   /> 

 <Footer/>
        </div>
     

      </div>


 


   
    </div>
   
  </div>
</>

    </div>
  );
}

export default App;
