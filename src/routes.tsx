import { BrowserRouter, Route } from 'react-router-dom';

import RegisterSubject from './pages/RegisterSubject';

function Routes() {
  return (
    <BrowserRouter>
      <Route path='/' component={RegisterSubject} />
      <Route path='/registerSubject' component={RegisterSubject} />
    </BrowserRouter>
  );
}

export default Routes;