import { NavLink } from 'react-router-dom'

import './styles.css';

interface IListContent {
  title: string;
  video: string;
  archives: string;
}


const ListContent: React.FC<IListContent> = (props) => {
  return ( 
    <ul className="cardContent">
      <li>
        {props.title}
        <a href={props.video} className="linkVideo">Assista ao Vídeo Aula</a>
        <p className="archives">{props.archives}</p>
        <input type="checkbox" />
      </li>
    </ul>
  );
}

export default ListContent;