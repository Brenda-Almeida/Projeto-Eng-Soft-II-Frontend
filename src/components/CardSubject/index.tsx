import { NavLink } from 'react-router-dom';
import './styles.css';

interface ICardSubject {
  SubjectName: string;
}

const CardSubject: React.FC<ICardSubject> = (props) => {
  return ( 
    <div className="card">
      <NavLink to="/topicList" className="title">{props.SubjectName}</NavLink>
    </div>
  );
}

export default CardSubject;