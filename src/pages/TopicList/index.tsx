import { useEffect, useState } from 'react';
import Button from '../../components/Button';
import api from '../../services/api';

import './styles.css';

interface Topic {
  id: string;
  name: string;
  description: string;
}


function TopicList() {

  const [topics, setTopic] = useState<Topic[]>([])

  useEffect(() => {
    api.get('/topics').then(response => {
      setTopic(response.data);
    });
  }, []);


  return (

    <div className="body">
      <div className="content">
        {topics.map((topic: Topic) => {
          return (
            <div className="content-form">
              <h1 className="title">{topic.name}</h1>
              <h2 className="title">{topic.description}</h2>
              <Button>Acessar</Button>
            </div>
          )
        })}

      </div>
    </div>
  );
}

export default TopicList;