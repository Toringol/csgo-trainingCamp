import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { Home } from './pages/Home';
import { Training } from './pages/Training';
import { About } from './pages/About';
import Authorization from './pages/Authorization/AuthContainer';
import Registration from './pages/Registation/RegistrationContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import { Footer } from './components/Footer';
import Logout from './components/Logout';
import { Blog } from './pages/Blog';
import { Theory } from './pages/Theory';
import { TacticEditor } from './pages/TacticEditor';
import { Provider } from 'react-redux';
import ProtectedRoute from './components/ProtectedRoute';
import store from './redux/reduxStore';
import { Statistics } from './pages/Statistics';
import { Settings } from './pages/Settings';
import { PracticeServers } from './pages/PracticeServers';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app">
          <NavbarContainer />
          <div className="content">
            <Switch>
              <Route path={'/'} exact component={ Home }/>
              <Route path={'/blog'} component={ Blog }/>
              <Route path={'/training'} component={ Training }/>
              <Route path={'/about'} component={ About }/>
              <Route path={'/servers'} component={ PracticeServers }/>
              <Route path={'/theory'} component={ Theory }/>
              <Route path={'/tacticeditor'} component={TacticEditor}/>
              <Route path={'/statistics'} component={ Statistics }/>
              <Route path={'/settings'} component={ Settings }/>
              <Route path={'/signin'} component={ Authorization }/>
              <Route path={'/signup'} component={ Registration }/>
              <Route path={'/logout'} component={ Logout }/>
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
