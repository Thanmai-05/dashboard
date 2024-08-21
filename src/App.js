import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Dashboard from './components/Dashboard';
import Search from './components/Search';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>CNAPP Dashboard</h1>
          <Search />
        </header>
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;
