import { useEffect, useState } from 'react'

import logo from '../../images/logo.gif';

import Menu from '../../components/Menu';
import MenuItem from '../../components/MenuItem';
import CardSubject from '../../components/CardSubject';

import "./styles.css";

import api from '../../services/api';

interface Subject {
  id: string;
  name: string;  
}

function Home() {
  const [ subjects, setSubject ] = useState<Subject[]>([])

    useEffect(() => {
      api.get('/subjects').then(response => {
        setSubject(response.data)
      })
    }, [])

    

  return (
    <div>
      <Menu>
        <MenuItem to="/home"><img src={logo} alt=""/></MenuItem>
        <MenuItem to="/createSubject">Criar Disciplina</MenuItem>
        <MenuItem to="/">Sair</MenuItem>
      </Menu>
      <div className="subjects">  
      {subjects.map((subject: Subject) => {
        return (
          <CardSubject SubjectName={subject.name} key={subject.id}/>
        )
      })}     
      </div>
    </div>
  );
}

export default Home;
