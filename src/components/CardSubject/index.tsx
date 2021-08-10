import { NavLink } from 'react-router-dom';
import './styles.css';

interface ICardSubject {
  SubjectName: string;
  id: any,
}

const CardSubject: React.FC<ICardSubject> = (props) => {
  const route = `/topicList/${props.id}`
  return ( 
    <div className="card">
      <NavLink to={route} className="title">{props.SubjectName}</NavLink>
    </div>
  );
}

export default CardSubject;