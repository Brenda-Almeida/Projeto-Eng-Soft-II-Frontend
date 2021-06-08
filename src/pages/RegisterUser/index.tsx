import { useState } from 'react';
import api from '../../services/api';
import Input from "../../components/Input"
import Button from "../../components/Button"

import './user.css';

function RegisterUser() {

  const [ email, setEmail ] = useState('');
  const [ name, setName ] = useState('');
  const [ type, setType ] = useState('');
  const [ password, setPassword ] = useState('');
  
  async function handleSubmit() {

    const data ={
      email: email,
      name: name,
      type: type,
      password: password,
    }
    
    if (name !== '' && email !== '' && password !== '' && type !== '') {
      const response = await api.post('/user', data)
      
      if (response.status === 200) {
        /* window.location.href = '' */
        alert("Cadastrado com sucesso");
      }else{
        alert("Não Cadastrado");        
      }
    }else{

    }
    
  }

  return (
    <div className="content">
      <div className="content-form">
        <h1 className="title">Cadastro</h1>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-text">
              <Input type="text" name="name" placeholder="Nome do Usuario" value ={name} onChange = { event => setName(event.target.value)}/>
              <Input type="email" name="email" placeholder="Email" value ={email} onChange = { event => setEmail(event.target.value)}/>
              <Input type="password" name="senha" placeholder="Senha" value ={password} onChange = { event => setPassword(event.target.value)}/>
            </div>
            <label htmlFor="">Status: </label>
            <div className="input-radio">
              <Input type="radio" name="status" value="1" checked = {status === "1"} onChange = { event => setType(event.target.value)} />
              <label className="option-radio" htmlFor="">Aluno</label>              
              <Input type="radio" name="status" value="0" checked = {status === "0"} onChange = { event => setType(event.target.value)} />
              <label htmlFor="">Professor</label>
            </div>
            <Button type="submit">Criar</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterUser;
