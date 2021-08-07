import { useState } from 'react';
import api from '../../services/api';

import './styles.css';

import Input from '../../components/Input'
import Button from '../../components/Button'
import { NavLink } from 'react-router-dom';


function RegisterContent() {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState('');
  const subjectId = '15390eac-c7c5-4878-8524-c2cfa6c54d0b';

  async function handleSubmit() {
    const data = {
      subject_id: subjectId,
      name: name,
      description: description,
      file:file,

    }

    if (name !== '' && description !== '' && file !== '') {
      const response = await api.post('/contents', data)

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
      <NavLink to="/Materiais" className="buttonBack">Voltar</NavLink>
        <h1 className="title">Criar Novo Conteúdo</h1>
        <div className="form">
          <form onSubmit={handleSubmit} >
            <div className="input-text">
              <Input
                type="text"
                name="name"
                value={name}
                onChange={event => setName(event.target.value)}
                placeholder="Título do Conteúdo" />
              <Input
                type="text"
                name="description"
                value={description}
                onChange={event => setDescription(event.target.value)}
                placeholder="Descrição" />
                <Input
                type="file"
                name="file"
                value={file}
                onChange={event => setFile(event.target.value)}
                placeholder="Adicionar arquivo" />
            </div>
            <Button>Criar</Button>
          </form>
        </div>
      </div>

    </div>
  );
}

export default RegisterContent;