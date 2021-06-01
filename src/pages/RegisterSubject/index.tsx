import './styles.css';

import Input from '../../components/Input'
import Button from '../../components/Button'

function RegisterSubject () {
  return (
    <div className="content">
      <div className="content-form">
        <h1 className="title">Criar Disciplina</h1>
        <div className="form">
          <form action="" >
            <div className="input-text">
              <Input type="text" name="subject" placeholder="Nome da Matéria" />
              <Input type="text" name="period" placeholder="Período" />
            </div>
            <label htmlFor="">Status: </label>
            <div className="input-radio">
              <Input type="radio" name="status" value="1" checked />
              <label className="option-radio" htmlFor="">Ativo</label>              
              <Input type="radio" name="status" value="0"  />
              <label htmlFor="">Desativo</label>
            </div>
            <Button>Criar</Button>
          </form>
        </div>
      </div>
      
    </div>
  );
}

export default RegisterSubject;