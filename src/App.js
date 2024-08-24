import { React, useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Dashboard from './components/Dashboard';
import Search from './components/Search';
import AddWidgetBar from './components/AddWidgetBar';
import './App.css';

function App() {
  const [isAddWidgetModalOpen, setAddWidgetModalOpen] = useState(false);

  
  const openAddWidgetModal = () => {
    setAddWidgetModalOpen(true);
    console.log("ttt",isAddWidgetModalOpen);
  };

  const closeAddWidgetModal = () => {
    setAddWidgetModalOpen(false);
  };

 

  

  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>CNAPP Dashboard</h1>
          <div className="top-bar-actions">
            <button onClick={openAddWidgetModal} className="add-widget-bar-button">
              Add Widget
            </button>
            <Search />
          </div>
          
        </header>
        <Dashboard />
        {isAddWidgetModalOpen && (
          <AddWidgetBar
            closeModal={closeAddWidgetModal}
            
          />
        )}
      </div>
    </Provider>
  );
}

export default App;
