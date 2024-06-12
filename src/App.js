import React from'react';
import './App.css';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Profile firstName="Jane" lastName="Doe" age={45} hairColor="Blonde"/>
      <Profile firstName="John" lastName="Smith" age={30} hairColor="Black"/>
    </div>
  );
}

export default App;
