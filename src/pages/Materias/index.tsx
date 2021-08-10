import { useState, useEffect } from 'react';

import './styles.css';

import Cadastrar from '../../components/Cadastrar';

import Button from '../../components/Button';
import api from '../../services/api';
import { NavLink } from 'react-router-dom';

interface Materias {
    id: string;
    name: string;
    id_teacher: String;
    period: string;
}

interface Register {
    id_subject: String;
}

function Materias() {
    const [materias, setmaterias] = useState([]);
    const [id_student, setid_student] = useState([]);
    const [id_subject, setid_subject] = useState([]);
    const [registers, setRegister] = useState([]);

    async function handleSubmit(id: string) {

        const data = {
            id_student: "b9769484-1c74-4728-ae1c-ad1f90b120c3", // precisa ser recuperado do user logado
            id_subject: id,
        }

        const response = await api.post('/registered', data)

        if (response.status === 200) {
            alert("Cadastrado com sucesso");
            window.location.href = '/materias'

        } else {
            alert("Não Cadastrado");
        }

    }

    useEffect(() => {

        async function loadMaterias() {
            const response = await api.get('/subjects');
            setmaterias(response.data)
        }
        loadMaterias();
    }, [])

    useEffect(() => {
        api.get('/registered').then(response => {
            setRegister(response.data)
        })
      }, [])

      let materiaClean: Array<Materias> = Array();

      materias.map((materia: Materias) => { 
        materiaClean.push(materia);
      })

      let i = 0;

      materias.map((materia: Materias) => {          
        registers.map((register: Register, indice) => {
            if(materia.id == register.id_subject){
                materiaClean.splice(indice - i, 1)
                i++;
            }
          })
      }) 
     
      
    return (
        <div className="content">
            <div className="content-form">
                <h1 className="title">Materias Disponiveis</h1>
                <div className="form">
                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                {<th>Professor</th>}
                                <th>Periodo</th>
                                <th>Cadastrar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {materiaClean.map((materia: Materias) => (
                                <tr>
                                    <td>{materia.name}</td>
                                    {<td>{materia.id_teacher}</td>}
                                    <td>{materia.period}</td>
                                    <td><button  onClick={() => handleSubmit(materia.id)}>cadastrar</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="buttonMaterias">
                        <NavLink className="buttonMaterias" to="/home">voltar</NavLink>
                    </div>
                </div>
            </div>
        </div>

    );



}

export default Materias;