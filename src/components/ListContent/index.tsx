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
        <a href={props.video} className="linkVideo" target="_blank">Assista ao Vídeo Aula</a>
        <a href={props.archives} className="archives" target="_blank">Arquivos da Aula</a>
        <input type="checkbox" />
      </li>
    </ul>
  );
}

export default ListContent;