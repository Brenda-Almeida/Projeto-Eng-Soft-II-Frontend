import { useEffect, useState } from 'react'

import logo from '../../images/logo.gif';

import Menu from '../../components/Menu';
import MenuItem from '../../components/MenuItem';
import ListContent from '../../components/ListContent';

import "./styles.css";

import api from '../../services/api';

interface Subject {
  id: string;
  name: string;  
}

function ClassRoom() {
  const [ subjects, setSubject ] = useState<Subject[]>([])

  /*useEffect(() => {
    api.get('/content').then(response => {
      setSubject(response.data)
    })
  }, []) */   

  return (
    <div>
      <Menu>
        <MenuItem to="/home"><img src={logo} alt=""/></MenuItem>
        <MenuItem to="/createContent">Criar Conteúdo</MenuItem>
        <MenuItem to="/topicList">Voltar</MenuItem>
      </Menu>
      <div className="contentClass"> 
      <ListContent title="Aula 01"
            video="https://www.youtube.com/watch?v=i2FN-PRrBfw"
          /> 
        <ListContent title="Aula 02"
          video="https://www.youtube.com/watch?v=i2FN-PRrBfw"
        /> 
         
         
      {/* {subjects.map((subject: Subject) => {
        return (
          
        ) */}
          
      </div>
    </div>
  );
}

export default ClassRoom;
