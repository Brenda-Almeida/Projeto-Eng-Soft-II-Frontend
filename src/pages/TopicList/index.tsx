import { useState } from 'react';
import Button from '../../components/Button';
import api from '../../services/api';

import './styles.css';


function TopicList() {

  return (
    <div className="body">
      <div className="content">
        <div className="content-form">
          <h1 className="title">Atividade</h1>
          <h2 className="title">Professor</h2>
          <h2 className="title">Matéria</h2>
          <Button>Acessar</Button>
        </div>
      </div>
    </div>
  );
}

export default TopicList;