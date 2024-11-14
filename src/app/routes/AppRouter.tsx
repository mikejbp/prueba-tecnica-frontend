import { Route } from 'wouter';
import { Home, Login } from '../../pages';

export default function AppRouter() {
  return (
    <main>
      <Route path="/" component={Home} />

      <Route path="/login" component={Login} />
    </main>
  );
}
