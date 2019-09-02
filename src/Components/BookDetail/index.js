import React from 'react';
import './bookDetail.css';

const BookDetail = ({ book }) => {
  console.log(book)
  return book ? ( //valida se tem ou não livro
    <div className='container'>
      <img src={book} alt="capa do livro" ></img>
      <div>
        <h2>{book.title}</h2>
        <p>{book.description}</p>
        <p>Autor: {book.author}</p>
        <p>Ano de Lançamento: {book.releaseYear}</p>
      </div>
    </div>
  ): <div>Livro selecionado não encontrado</div>;
};

export default BookDetail;