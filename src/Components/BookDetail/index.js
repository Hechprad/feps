import React from 'react';
//ganha acesso ao history
import { withRouter } from 'react-router-dom';

import Button from '../Button/index.js';

import './bookDetail.css';

// book, handleEdit e history vem do props
const BookDetail = ({ book, handleEdit, history }) => {

  //
  const deleteBook = () => {
    alert('Livro excluído com sucesso')
    history.push('/')
  }

  return book ? ( //valida se tem ou não livro
    <div className="container-detail">
      <img src={book.image} alt="capa do livro" ></img>
      <div className="text-detail">
        <h2>{book.title}</h2>
        <p><b>Descrição: </b>{book.description}</p>
        <p><b>Autor:</b> {book.author}</p>
        <p><b>Ano de Lançamento:</b> {book.releaseYear}</p>
        <div className="div-btn">
          {/* colocando true na função handEdit do BookView */}
          <Button className="btn" onClick={handleEdit} history={history}>Editar</Button>
          <Button className="btn" onClick={deleteBook}>Deletar</Button>
        </div>
      </div>
    </div>
  ): <div className="not-found">Livro não encontrado</div>;
};

export default withRouter(BookDetail);