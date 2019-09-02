import React, { useState } from 'react';
// ganha acesso ao history
import { withRouter } from 'react-router-dom';

import LabelInput from '../LabelInput/index.js';
import Button from '../Button/index.js';
import { Link } from 'react-router-dom';

import './bookFormPut.css';

const BookForm = ( {book, handleEdit, history } ) => {
  const [fields, setFields] = useState(book);
  // const [message, setMessage] = useState('');
  const voidFields = {
    title: '',
    description: '',
    author: '',
    releaseYear: '',
  };

  /*trata os valor dos campos dos inputs
  de maneira dinâmica, atualizando o valor 
  inserido pelo cliente*/
  const handleChangeFields = event => {
    const value = event.target.value;
    setFields({
      ...fields, [event.target.name]: value
    });
  }

  const handleClickSave = () => {
    //Aqui entra a chamada para o back para salvar os dados
    // forçando um 'save' para teste
    // const value = event.target.value;
    // books.push({
    //   ...fields, id: fields, [event.target.name]: value
    // });

    // atribuir valor vazio para os inputs após salvar
    setFields(voidFields);
    history.push('/');
    /* *****
    como redirecionar o cliente para a página de detalhe do 
    livro editado??
    ***** */

    // // aqui haverá uma validação dos campos se necessário   
    // setMessage('Filme criado com sucesso! :)')
  }

  return (
    <div className="container-form">
      {/* <LabelInput label="Importar Imagem da Capa" type="file" value={filename} onChange={handleChange}></LabelInput> */}
      <LabelInput label="Título" type="text" name="title" value={fields.title} onChange={handleChangeFields}></LabelInput>
      <LabelInput label="Descrição" type="text" name="description" value={fields.description} onChange={handleChangeFields}></LabelInput>
      <LabelInput label="Autor" type="text" name="author" value={fields.author} onChange={handleChangeFields}></LabelInput>
      <LabelInput label="Ano de Lançamento" type="text" name="releaseYear" value={fields.releaseYear} onChange={handleChangeFields}></LabelInput>
      <div className="container-btn">
        <Button className="btn" onClick={handleClickSave}>Salvar</Button>
        {/* chama a BookView, ativa a função handleEdit 
        mudando o valor true para false e cai no if do 'isEditing'
        sendo mandado de volta para a BookDetail*/}
        <Link to={`/book/${book.id}`}><Button className="btn" onClick={handleEdit}>Cancelar</Button></Link>
      </div>
    </div>
  );
};

export default withRouter(BookForm);
