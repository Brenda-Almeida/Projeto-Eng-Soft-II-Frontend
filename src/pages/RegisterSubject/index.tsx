import React, { useState } from 'react';

import api from '../../services/api';

import './styles.css';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { NavLink } from 'react-router-dom';


function RegisterSubject () {
  
  const [ name, setName ] = useState('');
  const [ period, setPeriod ] = useState('');
  const [ status, setStatus ] = useState('');
  
  async function handleSubmit() {

    const data ={
      name: name,
      period: period,
      status: status,
    }
    
    if (name !== '' && period !== '' && status !== '') {
      const response = await api.post('/createSubjects', data)
      
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
    <div className="content-subject">
      <div className="content-form">
        <NavLink to="/home" className="buttonBack">Voltar</NavLink>
        <h1 className="title">Criar Disciplina</h1>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-text">
              <Input 
                type="text" 
                name="subject" 
                placeholder="Nome da Matéria" 
                value ={name} 
                onChange = { event => setName(event.target.value)}
              />
              <Input 
                type="text" 
                name="period" 
                placeholder="Período"
                value ={period} 
                onChange = { event => setPeriod(event.target.value)} 
              />
            </div>
            <label htmlFor="">Status: </label>
            <div className="input-radio" >
              <Input 
                type="radio" 
                name="status"
                value="1"
                checked = {status === "1"} 
                onChange = { event => setStatus(event.target.value)}
              />
              <label className="option-radio" htmlFor="">Ativo</label>              
              <Input 
                type="radio" 
                name="status" 
                value="0"  
                checked = {status === "0"}
                onChange = { event => setStatus(event.target.value)} 
              />
              <label htmlFor="">Desativo</label>
            </div>
            <Button>Criar</Button>
          </form>
        </div>
      </div>
      
    </div>
  );
}

export default RegisterSubject;