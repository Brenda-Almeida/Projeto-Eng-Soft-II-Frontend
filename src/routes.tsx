import { BrowserRouter, Route } from 'react-router-dom';

import RegisterSubject from './pages/RegisterSubject';
import CreateTopic from './pages/CreateTopic';


function Routes() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={RegisterSubject} />
      <Route path='/registerSubject' component={RegisterSubject} />
      <Route path='/createTopic' component={CreateTopic} />
    </BrowserRouter>
  );
}

export default Routes;