import React from 'react';
import { withRouter } from 'react-router-dom';

import Header from '../Components/Header/index.js';
import BookFormPost from '../Components/BookFormPost/index.js';

const BookNew = () => {
  return(
    <div>
      <Header/>
      <BookFormPost />
    </div>
  );
};

export default withRouter(BookNew);


// const handleClickSave = event => {
  //Aqui entra a chamada para o back para salvar os dados
  // forçando um 'save' para teste
  // const value = event.target.value;
  // books.push({
  //   ...fields, id: books.length+2, [event.target.name]: value
  // });
  
  // atribuir valor vazio para os inputs após salvar
 // setFields(voidFields);
 // history.push('/');
  /* *****
  como redirecionar o cliente para a página de detalhe do 
  livro editado??
  withRouter
  ***** */

  // // aqui haverá uma validação dos campos se necessário   
  // setMessage('Filme criado com sucesso! :)')
//}