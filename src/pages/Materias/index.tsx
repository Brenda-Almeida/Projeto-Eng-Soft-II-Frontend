import { useState, useEffect } from 'react';

import './styles.css';

import Cadastrar from '../../components/Cadastrar';

import Button from '../../components/Button';
import api from '../../services/api';

interface Materias {
    id: string;
    name: string;
    id_teacher: string;
    period: string;
}

function Materias() {
    const [materias, setmaterias] = useState([]);
    const [id_student, setid_student] = useState([]);
    const [id_subject, setid_subject] = useState([]);

    async function handleSubmit(id: string) {

        const data = {
            id_student: "c5b7da13-497f-41ef-b822-2611cd07af58",
            id_subject: id,
        }



        const response = await api.post('/registered', data)

        if (response.status === 200) {
            /* window.location.href = '' */
            alert("Cadastrado com sucesso");
        } else {
            alert("Não Cadastrado");
        }


    }

    useEffect(() => {

        async function loadMaterias() {
            const response = await api.get('/subjects');
            console.log(response.data)
            setmaterias(response.data)
        }
        loadMaterias();
    }, [])

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
                            {materias.map((materia: Materias) => (
                                <tr>
                                    <td>{materia.name}</td>
                                    {<td>{materia.id_teacher}</td>}
                                    <td>{materia.period}</td>
                                    <td><button onClick={() => handleSubmit(materia.id)}>cadastrar</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Button>voltar</Button>
                </div>
            </div>
        </div>

    );



}

export default Materias;