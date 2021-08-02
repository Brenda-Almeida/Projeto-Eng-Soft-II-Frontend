import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../components/Button';
import api from '../../services/api';

import Menu from '../../components/Menu';
import MenuItem from '../../components/MenuItem';

import logo from '../../images/logo.gif';

import './styles.css';

interface Topic {
  id: string;
  name: string;
  description: string;
}


function TopicList() {

  const [topics, setTopic] = useState<Topic[]>([])

  useEffect(() => {
    api.get('/topics').then(response => {
      setTopic(response.data);
    });
  }, []);


  return (

    <div className="body">
      <Menu>
        <MenuItem to="/home"><img src={logo} alt=""/></MenuItem>
        <MenuItem to="/createTopic">Criar Tópico</MenuItem>
        <MenuItem to="/home">Voltar</MenuItem>
      </Menu>
      <div className="contentTopic">
        {topics.map((topic: Topic) => {
          return (
            <div className="content-form">
              <h1 className="title">{topic.name}</h1>
              <h2 className="title">{topic.description}</h2>
              <NavLink to="/classroom" className="acess">Acessar</NavLink>
            </div>
          )
        })}

      </div>
    </div>
  );
}

export default TopicList;