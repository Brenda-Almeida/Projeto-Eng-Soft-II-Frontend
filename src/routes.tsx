import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import RegisterUser from './pages/RegisterUser';
import Home from './pages/Home';

import RegisterSubject from './pages/RegisterSubject';
import CreateTopic from './pages/CreateTopic';
import TopicList from './pages/TopicList';


function Routes() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Landing} />
      <Route path='/registerUser' component={RegisterUser} />
      <Route path='/home' exact component={Home} />
      <Route path='/createSubject' component={RegisterSubject} />
      <Route path='/createTopic' component={CreateTopic} />
      <Route path='/topicList' component={TopicList} />
    </BrowserRouter>
  );
}

export default Routes;