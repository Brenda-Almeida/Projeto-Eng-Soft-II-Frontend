import './styles.css';

import Input from '../../components/Input'
import Button from '../../components/Button'

function RegisterTopic() {
  return (
    <div className="content">
      <div className="content-form">
        <h1 className="title">Criar Tópico</h1>
        <div className="form">
          <form action="" >
            <div className="input-text">
              <Input type="text" name="topic" placeholder="Nome do Tópico" />
              <Input type="text" name="description" placeholder="Descrição" />
            </div>
            <Button type="submit">Criar</Button>
          </form>
        </div>
      </div>

    </div>
  );
}

export default RegisterTopic;