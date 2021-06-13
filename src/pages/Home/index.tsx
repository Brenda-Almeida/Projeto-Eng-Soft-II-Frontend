
import logo from '../../images/logo.gif';

import Menu from '../../components/Menu';
import MenuItem from '../../components/MenuItem';
import CardSubject from '../../components/CardSubject';

import "./styles.css";

function Home() {
  return (
    <div>
      <Menu>
        <MenuItem to="/home"><img src={logo} alt=""/></MenuItem>
        <MenuItem to="/createSubject">Criar Disciplina</MenuItem>
        <MenuItem to="/">Sair</MenuItem>
      </Menu>
      <div className="subjects">   
        <CardSubject SubjectName="Ciências"></CardSubject>    
        <CardSubject SubjectName="Biologia"></CardSubject>    
        <CardSubject SubjectName="Matemática"></CardSubject>    
        <CardSubject SubjectName="Ciências"></CardSubject>    
        <CardSubject SubjectName="Biologia"></CardSubject>    
        <CardSubject SubjectName="Matemática"></CardSubject>    
      </div>
    </div>
  );
}

export default Home;
