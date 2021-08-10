import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import RegisterUser from './pages/RegisterUser';
import LoginUser from './pages/LoginUser';
import Home from './pages/Home';

import RegisterSubject from './pages/RegisterSubject';
import CreateTopic from './pages/CreateTopic';
import TopicList from './pages/TopicList';
import Materias from './pages/Materias';
import ClassRoom from './pages/ClassRoom';


function Routes() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Landing} />
      <Route path='/registerUser' component={RegisterUser} />
      <Route path='/login' component={LoginUser} />
      <Route path='/home' exact component={Home} />
      <Route path='/createSubject' component={RegisterSubject} />
      <Route path='/createTopic' component={CreateTopic} />
      <Route path='/topicList' component={TopicList} />
      <Route path='/materias' component={Materias} />
      <Route path='/classroom' component={ClassRoom} />
    </BrowserRouter>
  );
}

export default Routes;