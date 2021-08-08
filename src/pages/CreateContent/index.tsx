import { useState } from 'react';
import api from '../../services/api';

import './styles.css';

import Input from '../../components/Input'
import Button from '../../components/Button'
import { NavLink } from 'react-router-dom';


function RegisterContent() {

  const [title, setTitle] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const [archives, setArchives] = useState('');
  const topicId = '18c4ffea-b78a-4212-a711-aefcc5ca13ef';

  async function handleSubmit() {
    const data = {
      title: title,
      video_link: videoLink,
      archives: archives,
      topics_id: topicId,
    }

    if (title !== '' && videoLink !== '' && archives !== '') {
      const response = await api.post('/content', data);

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
                name="title"
                value={title}
                onChange={event => setTitle(event.target.value)}
                required
                placeholder="Título do Conteúdo" />
              <Input
                type="text"
                name="videoLink"
                value={videoLink}
                onChange={event => setVideoLink(event.target.value)}
                required
                placeholder="Adicionar link da video aula" />
              <Input
                type="text"
                name="archives"
                value={archives}
                onChange={event => setArchives(event.target.value)}
                required
                placeholder="Adicionar link do arquivo de aula" />
            </div>
            <Button>Criar</Button>
          </form>
        </div>
      </div>

    </div>
  );
}

export default RegisterContent;