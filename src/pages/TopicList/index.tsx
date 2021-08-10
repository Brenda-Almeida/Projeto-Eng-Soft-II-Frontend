import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Button from '../../components/Button';
import api from '../../services/api';

import Menu from '../../components/Menu';
import MenuItem from '../../components/MenuItem';

import logo from '../../images/logo.gif';

import './styles.css';
import { useAuth } from '../../hooks/Auth';

interface Topic {
  id: string;
  name: string;
  description: string;
  subject_id: String;
}

interface subjectParams {
  id: string
}


function TopicList() {
  
  const params = useParams<subjectParams>()
  const [topics, setTopic] = useState<Topic[]>([])
  const [topicsState, setTopicState] = useState<Topic[]>([])

  useEffect(() => {
    api.get('/topics').then(response => {
      setTopic(response.data);
    });
  });

  const routeTopic = `/createTopic/${params.id}` 

  var dados = Array()
  
  var aux = topics.map((teste) => {
    if(teste.subject_id == params.id) {
      return teste
    }
  })

  aux.map((teste) => {
    if(teste != undefined) {
      dados.push(teste)
    }
  })   
  const { user } = useAuth();

  function getTypeUser() {
    //if (user && user.type === 0) {
      return (
        <MenuItem to={routeTopic}>Criar Tópico</MenuItem>
      )
    //} 
  }
  
    
  return (

    <div className="body">
      <Menu>
        <MenuItem to="/home"><img src={logo} alt=""/></MenuItem>
        {getTypeUser()}
        <MenuItem to="/home">Voltar</MenuItem>
      </Menu>
      <div className="contentTopic">
       {dados.map((topic: Topic) => {
         const route = `/classroom/${topic.id}`
          return (
            <div className="content-form">
              <h1 className="title">{topic.name}</h1>
              <h2 className="title">{topic.description}</h2>
              <NavLink to={route} className="acess">Acessar</NavLink>
            </div>
          )
        })}

      </div>
    </div>
  ); 
}

export default TopicList;