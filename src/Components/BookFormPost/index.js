import React from 'react'
// withRouter = ganha acesso ao history
import { Link, withRouter } from 'react-router-dom';

import LabelInput from '../LabelInput/index.js';
import Button from '../Button/index.js';

const BookFormPost = () => {

  const handleSave = () => {

  };
  
  return(
    <div className="container-form">
        <LabelInput label="Url da Imagem" type="file"></LabelInput>
        <LabelInput label="Título" type="text" name="title" ></LabelInput>
        <LabelInput label="Descrição" type="text" name="description"></LabelInput>
        <LabelInput label="Autor" type="text" name="author"></LabelInput>
        <LabelInput label="Ano de Lançamento" type="text" name="releaseYear"></LabelInput>
        <div className="container-btn">
          <Link to='/'><Button className="btn" onClick={handleSave}>Salvar</Button></Link>
          <Link to='/'><Button className="btn">Voltar</Button></Link>
        </div>
      </div>
  );
};

export default withRouter(BookFormPost);