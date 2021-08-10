import { useEffect, useState } from 'react'

import logo from '../../images/logo.gif';

import Menu from '../../components/Menu';
import MenuItem from '../../components/MenuItem';
import CardSubject from '../../components/CardSubject';

import "./styles.css";

import api from '../../services/api';
import { useAuth } from '../../hooks/Auth';



interface Subject {
  id: string;
  name: string;  
}

interface Register {
  id_subject: String;
}

function Home() {
  const [ subjects, setSubject ] = useState<Subject[]>([])
  const [ registers, setRegisters ] = useState<Register[]>([])

   useEffect(() => {
    api.get('/registered').then(response => {
      setRegisters(response.data)
    })
  }, [])

  useEffect(() => {
    api.get('/subjects').then(response => {
      setSubject(response.data)
    })
  }, [])

  let subjectClean = Array();

  subjects.map((materia: Subject) => {          
    registers.map((register: Register, indice) => {
        if(materia.id == register.id_subject){
          subjectClean.push(materia);
        }
      })
  })

  return (
    <div>
      <Menu>
        <MenuItem to="/home"><img src={logo} alt=""/></MenuItem>
        <MenuItem to="/materias">Cadastrar em Disciplinas</MenuItem>
        <MenuItem to="/">Sair</MenuItem>
      </Menu>
      <div className="subjects">  
      {subjectClean.map((subject: Subject) => {
        return (
          <CardSubject SubjectName={subject.name} key={subject.id} id={subject.id}/>
        )
      })}     
      </div>
    </div>
  );
}

export default Home;
