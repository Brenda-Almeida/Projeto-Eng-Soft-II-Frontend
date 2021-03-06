import { useState } from 'react';
import api from '../../services/api';

import './styles.css';

import Input from '../../components/Input'
import Button from '../../components/Button'
import { NavLink, useParams } from 'react-router-dom';

interface subjectParams {
  id: string
}

function RegisterTopic() {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const params = useParams<subjectParams>()
  const subjectId = params.id;

  async function handleSubmit() {
    const data = {
      subject_id: subjectId,
      name: name,
      description: description

    }

    if (name !== '' && description !== '') {
      const response = await api.post('/topics', data)

      if (response.status === 200) {
        /* window.location.href = '' */
        alert("Cadastrado com sucesso");
      } else {
        alert("Não Cadastrado");
      }
    } else {

    }
  }

  return (
    <div className="content">
      <div className="content-form">
      <NavLink to="/topicList" className="buttonBack">Voltar</NavLink>
        <h1 className="title">Criar Tópico</h1>
        <div className="form">
          <form onSubmit={handleSubmit} >
            <div className="input-text">
              <Input
                type="text"
                name="name"
                value={name}
                onChange={event => setName(event.target.value)}
                placeholder="Nome do Tópico" />
              <Input
                type="text"
                name="description"
                value={description}
                onChange={event => setDescription(event.target.value)}
                placeholder="Descrição" />
            </div>
            <Button>Criar</Button>
          </form>
        </div>
      </div>

    </div>
  );
}

export default RegisterTopic;