import PeoplePage from '@containers/PeoplePage';
import HomePage from '@containers/HomePage'
import NotFoundPage from '@containers/NotFoundPage'
import PersonPage from '@containers/PersonPage'
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
    path: '*',
    exact: false,
    element: NotFoundPage
  }
]

export default routesConfig;