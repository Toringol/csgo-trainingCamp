import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { Home } from './pages/Home';
import { Training } from './pages/Training';
import { About } from './pages/About';
import { Auth } from './pages/Auth';
import { Registration } from './pages/Registration';
import NavbarContainer from './components/Navbar/NavbarContainer';
import { Footer } from './components/Footer';
import { Blog } from './pages/Blog';
import { Provider } from 'react-redux'
import store from './redux/reduxStore';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app">
          <NavbarContainer />
          <div className="content">
            <Switch>
              <Route path={'/'} exact component={Home}/>
              <Route path={'/blog'} component={Blog}/>
              <Route path={'/training'} component={Training}/>
              <Route path={'/about'} component={About}/>
              <Route path={'/signin'} component={Auth}/>
              <Route path={'/signup'} component={Registration}/>
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
