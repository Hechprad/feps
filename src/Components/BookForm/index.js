import React, { useState } from 'react';

import LabelInput from '../LabelInput/index.js';
import Button from '../Button/index.js';
import { Link } from 'react-router-dom';

import './bookForm.css';

const BookForm = ( {book, handleEdit} ) => {
  const [fields, setFields] = useState(book);
  
  return (
    <div className="container-form">
      {/* <LabelInput label="Importar Imagem da Capa" type="file" value={filename} onChange={handleChange}></LabelInput> */}
      <LabelInput label="Título" type="text" name="title" value={fields.title}></LabelInput>
      <LabelInput label="Descrição" type="text" name="description" value={fields.description}></LabelInput>
      <LabelInput label="Autor" type="text" name="author" value={fields.author}></LabelInput>
      <LabelInput label="Ano de Lançamento" type="text" name="releaseYear" value={fields.releaseYear}></LabelInput>
      <div className="container-btn">
        <Button className="btn">Salvar</Button>
        {/* chama a BookView, ativa a função handleEdit 
        mudando o valor true para false e cai no if do 'isEditing'
        sendo mandado de volta para a BookDetail*/}
        <Link to={`/book/${book.id}`}><Button className="btn" onClick={handleEdit}>Cancelar</Button></Link>
      </div>
    </div>
  );
};

export default BookForm;
