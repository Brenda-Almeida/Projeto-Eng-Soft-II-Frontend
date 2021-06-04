import Input from "../../components/Input"
import Button from "../../components/Button"

import './user.css';

function RegisterUser() {
  return (
    <div className="content">
      <div className="content-form">
        <h1 className="title">Cadastro</h1>
        <div className="form">
          <form action="" >
            <div className="input-text">
              <Input type="text" name="name" placeholder="Nome do Usuario" />
              <Input type="email" name="email" placeholder="Email" />
              <Input type="password" name="senha" placeholder="Senha" />
            </div>
            <label htmlFor="">Status: </label>
            <div className="input-radio">
              <Input type="radio" name="status" value="1" checked />
              <label className="option-radio" htmlFor="">Aluno</label>              
              <Input type="radio" name="status" value="0"  />
              <label htmlFor="">Professor</label>
            </div>
            <Button>Criar</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterUser;
