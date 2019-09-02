import React, { useState, useEffect } from "react";
import Header from '../Components/Header/index.js';
import BookDetail from "../Components/BookDetail/index.js";

import { books } from '../Mock/index.js';

const BookView = ({ match }) => {
  console.log(match)
  const [book, setBook] = useState(null);
  // const [isEditing, setIsEditing] = useState(false);

  // const handleEdit = () => {
  //   //edição
  // };

  // Similar ao componentDidMount e componentDidUpdate e componentWillUnmount
  useEffect(() => {
    const filtered = books.filter(
      book => book.id === parseInt(match.params.id)
    )[0];
    setBook(filtered);
    // getBookById(match.param.id).then(({data}) => {
    //   setBook(data);
    // }).catch((erro) => {
    //   console.log(erro);
    // });
  }, [match.params.id]);
  return (
    <div>
      <Header />
      <BookDetail book={book} />
    </div>
  );
};

export default BookView;

// import React, { useState, useEffect } from 'react'
// import Header from '../Components/Header'
// import Hero from '../Components/Header/Hero'
// import MovieDetail from '../Components/MovieDetail'
// import MovieForm from '../Components/MovieForm'
// import { movies } from '../mock'

// const MovieView = ({ match }) => {
//   const [movie, setMovie] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);

//   const handleEdit = () => {
//     setIsEditing(!isEditing)
//   }
//   useEffect(() => {
//     const filtered = movies.filter((movie) => movie.id === parseInt(match.params.id))[0]
//     setMovie(filtered)
//   }, [match.params.id]);

//   return (
//     <div>
//       <Header />
//       <Hero />
//       {
//         isEditing ?
//           <MovieForm movie={movie} /> :
//           <MovieDetail movie={movie} handleEdit={handleEdit} />
//       }
//     </div>
//   )
// }
