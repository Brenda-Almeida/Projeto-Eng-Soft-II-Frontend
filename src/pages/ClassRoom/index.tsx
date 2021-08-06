import { useEffect, useState } from 'react'

import logo from '../../images/logo.gif';

import Menu from '../../components/Menu';
import MenuItem from '../../components/MenuItem';
import ListContent from '../../components/ListContent';

import "./styles.css";

import api from '../../services/api';

interface Content {
  id: string;
  title: string;
  video_link: string;
  archives: string;
  topics_id: string;

}

function ClassRoom() {
  const [content, setContent] = useState<Content[]>([])

  useEffect(() => {

    async function loadMaterias() {
      const response = await api.get('/content');
      console.log(response.data)
      setContent(response.data)
    }
    loadMaterias();
  }, [])

  return (
    <div>
      <Menu>
        <MenuItem to="/home"><img src={logo} alt="" /></MenuItem>
        <MenuItem to="/createContent">Criar Conteúdo</MenuItem>
        <MenuItem to="/topicList">Voltar</MenuItem>
      </Menu>

      <div className="contentClass">
     
        {content.map((content: Content) => (
          <ListContent title={content.title}
            video={content.video_link}
            archives={content.archives}
          />
        ))}

      </div>
    </div>
  );
}

export default ClassRoom;
