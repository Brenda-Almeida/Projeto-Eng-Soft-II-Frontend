import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing';
import RegisterUser from './pages/RegisterUser';
import LoginUser from './pages/LoginUser';
import Home from './pages/Home';
import HomeStudent from './pages/HomeStudent';

import RegisterSubject from './pages/RegisterSubject';
import CreateTopic from './pages/CreateTopic';
import CreateContent from './pages/CreateContent';
import TopicList from './pages/TopicList';
import Materias from './pages/Materias';
import ClassRoom from './pages/ClassRoom';
import { useAuth } from './hooks/Auth';


function Routes() {
  const { user } = useAuth();
 
  //rotas dos alunos
  if (user && user.type === 1){
    return (
      <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Landing} />  
        <Route path='/home' component={HomeStudent} />
        <Route path='/topicList/:id' component={TopicList} />
        <Route path='/materias' component={Materias} />
        <Route path='/classroom/:id' component={ClassRoom} />
      </Switch>
      </BrowserRouter>
    );
  }

  //Rotas da professora
  if (user && user.type === 1){
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Landing} />  
          <Route path='/home' component={Home} />
          <Route path='/topicList/:id' component={TopicList} />
          <Route path='/classroom/:id' component={ClassRoom} />
          <Route path='/createSubject' component={RegisterSubject} />
          <Route path='/createTopic/:id' component={CreateTopic} />
          <Route path='/createContent/:id' component={CreateContent} />
          <Route component={Home}/>
           
        </Switch>
      </BrowserRouter>
    );
  } 
  //Não logado
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Landing} />      
        <Route path='/registerUser' component={RegisterUser} />
        <Route path='/login' component={LoginUser} />
        <Route component={Landing}/>  
      </Switch>
    </BrowserRouter>
  );


 
}

export default Routes;