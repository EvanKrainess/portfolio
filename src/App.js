import './App.css';
import React from 'react';
import TypingText from './components/TypingText/TypingText';
import Header from './components/Header/Header'
import About from './components/About/About'
import Experience from './components/Experience/Experience'


function App() {
  return (
    <div className='App'>
      <Header></Header>
      <div className="Text">
        <TypingText texts={["Hello!","Welcome to my website!", "I'm Evan Krainess!"]} />
      </div>
      <About></About>
      <Experience></Experience>
    </div>
  );
}

export default App;
