import { Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing';
import MainHeader from './components/MainHeader';
import LoginModal from './pages/LoginModal';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
        {/* <Route path='*'>
            <Redirect to='/welcome' />
          </Route> */}
          <Route path='/welcome'>
            <Landing />
          </Route>
          <Route path='/login' exact>
            <LoginModal />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book
