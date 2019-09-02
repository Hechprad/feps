import React, { useState, useEffect } from "react";
import Header from '../Components/Header/index.js';
import BookDetail from '../Components/BookDetail/index.js';
import BookForm from '../Components/BookForm/index.js';

// import { getBookById } from '../API/Books/index.js';
import { books } from '../Mock/index.js';


// match vem do props
const BookView = ({ match }) => {
  const [book, setBook] = useState(null);
  // estado da edição para saber qual componente enviar ao cliente
  const [isEditing, setIsEditing] = useState(false);

  // função chamada ao clicar no botão editar na page do detalhe
  const handleEdit = () => {
  //state da edição para BookForm
  // isEditing = false / !isEditing = true
   setIsEditing(!isEditing)
  };

  // Similar ao componentDidMount e componentDidUpdate e componentWillUnmount
  useEffect(() => {
    // filtrando o array de livros pelo id passado no param
    const filtered = books.filter(
      book => book.id === parseInt(match.params.id)
    )[0];
    // colocando o livro encontrado no state do book
    setBook(filtered);

    // batendo na api
    // getBookById(match.param.id).then(({data}) => {
    //   setBook(data);
    // }).catch((erro) => {
    //   console.log(erro);
    // });
  }, [match.params.id]);
  return (
    <div>
      <Header />
      {/* validação de páginas */}
      {
        // se for editar, manda o componente form
        // se não for editar, manda o detalhe
        isEditing ? 
          <BookForm book={book}/> : 
          <BookDetail book={book} handleEdit={handleEdit}/>
      }
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
