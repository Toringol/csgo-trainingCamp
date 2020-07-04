import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { Home } from './pages/Home';
import { Training } from './pages/Training';
import { About } from './pages/About';
import { Auth } from './pages/Auth';
import { Registration } from './pages/Registration';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Blog } from './pages/Blog';

function App() {
  return (
    <BrowserRouter>
        <div className="app">
          <Navbar />
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
  );
}

export default App;
