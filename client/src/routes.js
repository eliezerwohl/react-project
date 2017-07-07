import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import Secret from './components/Secret.jsx';
import DashboardPage from './containers/DashboardPage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import AppMain from './containers/AppMain.jsx';
import Auth from './modules/Auth';

function authTest(location, callback, target) {
          if (Auth.isUserAuthenticated()) {
          callback(null, target);
        } else {
          callback(null, HomePage);
        }
}

const routes = {
  // base component (wrapper for the whole application).
  component: Base,
  childRoutes: [

    {
      path: '/',
      getComponent: (location, callback) => {
        authTest(location, callback, DashboardPage);

      }
    },

    {
      path: '/login',
      component: LoginPage
    },

    {
      path: '/signup',
      component: SignUpPage
    },
    {
      path: '/secret',
      getComponent: (location, callback) => {
        authTest(location, callback, Secret);

      }
    },
       
    {
      path: '/logout',
      onEnter: (nextState, replace) => {
        Auth.deauthenticateUser();

        // change the current URL to /
        replace('/');
      }
    }

  ]
};

export default routes;