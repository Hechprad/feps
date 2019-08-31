import React from 'react';
import './button.css';

/** 
 * children = todos os filhos de button, no caso o texto com o nome do button.
 * ...props = spread operator trás todas as outras informações do props,
 * portanto, todos os valores das propriedades serão colocadas automaticamente.
 */
const Button = ({ children, ...props}) => {
  
  return (
    <button type="button" {...props}>{children}</button>
  );
};

export default Button;