import { useCallback, useState } from 'react';
import api from '../../services/api';
import Input from "../../components/Input"
import Button from "../../components/Button"
import { Link, useHistory } from 'react-router-dom';

import './styles.css';
import { useAuth } from '../../hooks/Auth';

const LoginUser: React.FC = () => {
  
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const { signIn } = useAuth();
  const history = useHistory();
  
  const handleSubmit = useCallback(
    async () => {
      try {
        
        const response = await api.post('/sessions', {
          email,
          password,
        })

      const { token, user} = response.data;

      console.log("token: ", token);
      console.log("user: ", user);

      //const userData: any = token;

      //const user = userData.usr;

      localStorage.setItem('@Profe:token', token);

      localStorage.setItem('@Profe:user', JSON.stringify(user));

      console.log("token2: ", token);
      console.log("user2: ", user);
        history.push('/home');
      } catch (err) {
        console.log( err);
        alert("Check suas credenciais!");
      }
    },
    [signIn, history, email, password],
  );

  return (
    <div className="containerLogin">
      <div className="content-form">
        <h1 className="title">Login</h1>
        <div className="form">
            <div className="input-text">
              <Input type="email" name="email" placeholder="Email" value ={email} onChange = { event => setEmail(event.target.value)}/>
              <Input type="password" name="senha" placeholder="Senha" value ={password} onChange = { event => setPassword(event.target.value)}/>
            </div>
            
            <button onClick = {() => handleSubmit()}>Logar</button>
            <Link to="/registerUser" className="link">
            <Button>Fazer cadastro</Button>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginUser;
