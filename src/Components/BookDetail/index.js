import React from 'react';
import './bookDetail.css';

const BookDetail = ({ book }) => {
  return book ? ( //valida se tem ou não livro
    <div className="container-detail">
      <img src={book.image} alt="capa do livro" ></img>
      <div calssName="text-detail">
        <h2>{book.title}</h2>
        <p><b>Descrição: </b>{book.description}</p>
        <p><b>Autor:</b> {book.author}</p>
        <p><b>Ano de Lançamento:</b> {book.releaseYear}</p>
      </div>
    </div>
  ): <div className="not-found">Livro não encontrado</div>;
};

export default BookDetail;