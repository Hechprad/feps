import React, { useState } from 'react'
// withRouter = ganha acesso ao history
import { Link, withRouter } from 'react-router-dom';

import LabelInput from '../LabelInput/index.js';
import Button from '../Button/index.js';

import { books } from '../../Mock/index.js';

const BookFormPost = () => {
  // estado inicial dos inputs
  const [fields, setFields] = useState({
    title: '',
    author: '',
    releaseYear: '',
    description: '',
    image: ''
  });

  // manuseando as mudanças nos inputs
  const handleChange = event => {
    const value = event.target.value;
    setFields({
      ...fields,
      [event.target.name]: value
    });
  }

  const handleSave = (event) => {
    //Aqui teria uma chamada para o back para salvar as infos
    //forçando um 'save' para teste
    const value = event.target.value;
    books.push({
      ...fields, id: books.length+2, [event.target.name]: value
    });
  };

  return(
    <div className="container-form">
        <LabelInput label="Título" type="text" name="title" onChange={handleChange}></LabelInput>
        <LabelInput label="Autor" type="text" name="author" onChange={handleChange}></LabelInput>
        <LabelInput label="Ano de Lançamento" type="text" name="releaseYear" onChange={handleChange}></LabelInput>
        <LabelInput label="Descrição" type="text" name="description" onChange={handleChange}></LabelInput>
        <LabelInput label="Url da Imagem" type="text" onChange={handleChange}></LabelInput>
        <div className="container-btn">
          <Link to='/'><Button className="btn" onClick={handleSave}>Salvar</Button></Link>
          <Link to='/'><Button className="btn">Voltar</Button></Link>
        </div>
      </div>
  );
};

export default withRouter(BookFormPost);