import { NavLink } from 'react-router-dom'

import './styles.css';

interface IListContent {
  title: string;
  video: string;
}


const ListContent: React.FC<IListContent> = (props) => {
  return ( 
    <ul className="cardContent">
      <li>
        {props.title}
        <a href={props.video} className="linkVideo">Assista ao Vídeo Aula</a>
        <input type="checkbox" />
      </li>
    </ul>
  );
}

export default ListContent;