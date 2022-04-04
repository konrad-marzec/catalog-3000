import { Router, Switch, Route } from 'react-router-dom';

import Auth from '../modules/auth/components';
import Catalog from '../modules/catalog/components';
import history from './history';
import ProtectedRoute from './ProtectedRoute';

function Routes(): JSX.Element {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/auth">
          <Auth />
        </Route>
        <ProtectedRoute path="/:path*">
          <Catalog />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}

export default Routes;
