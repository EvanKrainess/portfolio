import './App.css';
import React from 'react';
import TypingText from './components/TypingText/TypingText';
import Header from './components/Header/Header'


function App() {
  return (
    <div className='App'>
      <Header></Header>
      <div className="Text">
        <TypingText texts={["Hello!","Welcome to my website!", "I'm Evan Krainess!"]} />
      </div>
    </div>
  );
}

export default App;
