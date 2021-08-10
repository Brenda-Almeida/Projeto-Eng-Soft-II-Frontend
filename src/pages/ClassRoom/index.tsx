import { useEffect, useState } from 'react'

import logo from '../../images/logo.gif';

import Menu from '../../components/Menu';
import MenuItem from '../../components/MenuItem';
import ListContent from '../../components/ListContent';

import "./styles.css";

import api from '../../services/api';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../hooks/Auth';

interface Content {
  id: string;
  title: string;
  video_link: string;
  archives: string;
  topics_id: string;

}

interface ITopic {
  id: string
}


function ClassRoom() {

  const params = useParams<ITopic>()
  const [content, setContent] = useState<Content[]>([])

  useEffect(() => {

    async function loadMaterias() {
      const response = await api.get('/content');
      setContent(response.data)
    }
    loadMaterias();
  }, [])

  var dados = Array()
  
  var aux = content.map((content) => {
    if(content.topics_id == params.id) {
      return content
    }
  })

  aux.map((content) => {
    if(content != undefined) {
      dados.push(content)
    }
  })

  const route = `/createContent/${params.id}`

  const { user } = useAuth();
  
  function getTypeUser() {
    //if (user && user.type === 0) {
      return (
        <MenuItem to={route}>Criar Conteúdo</MenuItem>
      )
    //} 
  }

  return (
    <div>
      <Menu>
        <MenuItem to="/home"><img src={logo} alt="" /></MenuItem>
        {getTypeUser()}
        <MenuItem to="/home">Voltar</MenuItem>
      </Menu>

      <div className="contentClass">
     
        {dados.map((content: Content) => (
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
