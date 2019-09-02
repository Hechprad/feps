import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Header from '../Components/Header/index.js';
import LabelInput from '../Components/LabelInput/index.js';
import Button from '../Components/Button/index.js';

// import './bookNew.css';

const BookNew = (props) => {
  console.log(props)
  return(

    <div>
      <Header/>
      <div className="container-form">
        <LabelInput label="Url da Imagem" type="file"></LabelInput>
        <LabelInput label="Título" type="text" name="title" ></LabelInput>
        <LabelInput label="Descrição" type="text" name="description"></LabelInput>
        <LabelInput label="Autor" type="text" name="author"></LabelInput>
        <LabelInput label="Ano de Lançamento" type="text" name="releaseYear"></LabelInput>
        <div className="container-btn">
          <Link to='/'><Button className="btn">Salvar</Button></Link>
          <Link to='/'><Button className="btn">Voltar</Button></Link>
        </div>
      </div>
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
  ***** */

  // // aqui haverá uma validação dos campos se necessário   
  // setMessage('Filme criado com sucesso! :)')
//}