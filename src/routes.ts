import type { RouteDefinition } from '@solidjs/router';

import Home from './pages/home';
import Wiki from './pages/wiki';
import WikiHome from './pages/entries/2b2h';

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: Home,
  },
  {
  path: '/wiki',
  component: Wiki,
  }, // TODO: Find a better way to do subpages with wiki.. (and wiki in general)
  {
  path: '/wiki/server',
  component: WikiHome,
  }
];
