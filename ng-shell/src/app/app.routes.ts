import { NxWelcome } from './components/nx-welcome';
import { Route } from '@angular/router';
import { ReactMfeRoute } from './react-mfe-route';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcome,
  },
  {
    path: 'react-mfe',
    component: ReactMfeRoute,
  }
];
