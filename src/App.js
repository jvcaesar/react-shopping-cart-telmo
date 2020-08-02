import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Application imports
import store from './store'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import './App.css';

// The Provider makes the Redux store available to any nested components that have been wrapped
// in the connect() function. Since any React component in a React Redux app can be connected,
// most applications will render a <Provider> at the top level with the entire app's component
// tree inside of it.
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>            {/* rendering one component at a time */}
            <Route exact path='/' component={Home} />
            <Route exact path='/cart' component={Cart} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
