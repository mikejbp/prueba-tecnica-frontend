import { Route, Router } from 'wouter';
import { Home, Login } from '../../pages';
import { Toaster } from 'sonner';

export default function AppRouter() {
  return (
    <main>
      <Toaster visibleToasts={3} expand position="top-right" duration={5000} />

      <Router>
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Router>
    </main>
  );
}
