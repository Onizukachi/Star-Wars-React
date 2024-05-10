import PeoplePage from '@containers/PeoplePage';
import HomePage from '@containers/HomePage'
import NotFoundPage from '@containers/NotFoundPage'
import PersonPage from '@containers/PersonPage'
import FavoritesPage from '@containers/FavoritesPage';
import { exact } from 'prop-types';

const routesConfig = [
  {
    path: '/', 
    element: HomePage,
  },
  {
    path: '/people',
    element: PeoplePage
  },
  {
    path: '/not_found',
    element: NotFoundPage
  },
  {
    path: '/people/:id',
    element: PersonPage
  },
  {
    path: '/favorites',
    element: FavoritesPage
  },
  {
    path: '*',
    exact: false,
    element: NotFoundPage
  }
]

export default routesConfig;