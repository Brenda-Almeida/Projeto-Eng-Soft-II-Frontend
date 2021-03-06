import { Link } from 'react-router-dom'

import Button from '../../components/Button';

import "./styles.css";

function Landing() {
  return (
    <div className="bg-landing">
      <div className="content-landing">
        <span>Bem-Vindo</span>
        <span>NomeDoSite</span>
        <Link to="/login" className="link">
          <Button>LOGIN</Button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;


