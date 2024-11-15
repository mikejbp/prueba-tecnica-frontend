import { Route, Router, Switch } from 'wouter';
import { Home, Login, NotFoundPage } from '../../pages';
import { Toaster } from 'sonner';

export default function AppRouter() {
  return (
    <main>
      <Toaster visibleToasts={3} expand position="top-right" duration={5000} />

      <Router>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </main>
  );
}
