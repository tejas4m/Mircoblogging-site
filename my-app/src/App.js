import React from 'react';
import App1 from './App1';
import Signup from './Signup';
import Login from './Login';
import page from './errorpage';
import PrivateRoute from './PrivateRoute';

import {AuthProvider} from './contexts/AuthContext';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';

function App() {
    return (
        
        <div>
          <Router>
              <AuthProvider>
                 <Switch>
                     <PrivateRoute exact path ="/" component={App1} />
                     <Route path ="/signup" component ={Signup} />
                     <Route path ="/login" component ={Login} />
                       <Route path ="/errorpage" component ={page} /> 

                 </Switch>
              </AuthProvider>
          </Router>
            
        </div>
    )
}

export default App