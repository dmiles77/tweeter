import React from 'react';
import { AppProvider } from './Context/AppContext';
import Tweeter from './Pages/Tweeter';
import './App.css';

function App() {
  return (
    <AppProvider>
      <Tweeter />
    </AppProvider>
  );
}

export default App;
