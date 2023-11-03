import { useState } from 'react';
import Login from './pages/Login';
import Chat from './pages/Chat';
import './App.css';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const onLogin = () => {
    setLoggedIn(true);
  };

  const onLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div className="App">
       <h1>Web Sockets React</h1>
       { isLoggedIn? (
          <Chat logout={onLogout} />
       ) : (
          <Login login={onLogin} />
       )}
    </div>
  );
}

export default App;
