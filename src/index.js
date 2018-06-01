import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

// Apollo Imports
import { ApolloProvider } from 'react-apollo';
import { client } from './client/configuration';

// Routes
import Main from './components/Main';
import Platform from './components/Platform';
import NotFound from './components/NotFound';


ReactDOM.render((
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Switch>
        <Redirect exact from='/' to='/web/people'/>
        <Route path="/web" component={Main}/>
        <Route path="/platform" component={Platform}/>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </ApolloProvider>
), document.getElementById('root'))

registerServiceWorker();
