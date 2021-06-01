import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  name: string;
}

const Input: React.FC<InputProps> = ({ type, name, ...rest }) => {
  return ( 
    <input type={type} name={name} {...rest}/>      
  );
}

export default Input;