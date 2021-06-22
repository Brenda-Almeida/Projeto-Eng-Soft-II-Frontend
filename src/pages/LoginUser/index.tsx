import { useCallback, useState } from 'react';
import api from '../../services/api';
import Input from "../../components/Input"
import Button from "../../components/Button"
import { Link, useHistory } from 'react-router-dom';

import './user.css';
import { useAuth } from '../../hooks/Auth';

const LoginUser: React.FC = () => {
  const history = useHistory();

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const { singIn } = useAuth();
  
  const handleSubmit = useCallback(
    async () => {
      try {
        
        await singIn({
          email: email,
          password: password,
        });
        history.push('/dashboard');
      } catch (err) {
        alert("Tente novamente");
      }
    },
    [singIn, history, email, password],
  );

  return (
    <div className="containerLogin">
      <div className="content-form">
        <h1 className="title">Login</h1>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-text">
              <Input type="email" name="email" placeholder="Email" value ={email} onChange = { event => setEmail(event.target.value)}/>
              <Input type="password" name="senha" placeholder="Senha" value ={password} onChange = { event => setPassword(event.target.value)}/>
            </div>
            
            <Button>Logar</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginUser;
