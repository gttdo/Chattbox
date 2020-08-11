import React from 'react';
import './css/style.css';

// Components
import ChatBox from './components/ChatBox';

function App() {
  return (
    <div className="container">
      <nav className="header">
        <span className="header-logo">Logo</span>
        <ul className="header-nav">
          <li><a>Profile</a></li>
          <li><a>Signup</a></li>
          <li><a>Login</a></li>
          <li><a>Logout</a></li>
        </ul>
      </nav>
      <ChatBox/>
    </div>
  );
}

export default App;
