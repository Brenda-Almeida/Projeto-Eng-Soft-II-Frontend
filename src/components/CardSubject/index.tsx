import './styles.css';

interface ICardSubject {
  SubjectName: string;
}

const CardSubject: React.FC<ICardSubject> = (props) => {
  return ( 
    <div className="card">
      <h3>{props.SubjectName}</h3>
    </div>
  );
}

export default CardSubject;