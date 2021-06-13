import { Link } from 'react-router-dom'

import Button from '../../components/Button';

import "./styles.css";

function Landing() {
  return (
    <div className="bg-index">
      <div className="content-index">
        <span>Bem-Vindo</span>
        <span>NomeDoSite</span>
        <Link to="/registerUser" className="link">
          <Button>LOGIN</Button>
        </Link>

      </div>
    </div>
  );
}

export default Landing;


