import { BrowserRouter, Route } from 'react-router-dom';

import RegisterSubject from './pages/RegisterSubject';
import CreateTopic from './pages/CreateTopic';
import RegisterUser from './pages/RegisterUser';


function Routes() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={RegisterSubject} />
      <Route path='/registerSubject' component={RegisterSubject} />
      <Route path='/createTopic' component={CreateTopic} />
      <Route path='/registerUser' component={RegisterUser} />
    </BrowserRouter>
  );
}

export default Routes;