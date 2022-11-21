import React from 'react';
import './App.scss';
import Description from './Description/Description';
import NavBar from './Nav-Bar/Nav-Bar.js';
import RightBar from './Right-Bar/Right-Bar';
import ToDo from './ToDo/ToDo';

// Main component that loads all the other somponents in the application
class App extends React.Component {

  render(){
    return (
      <div>
        <NavBar></NavBar>
        <ToDo></ToDo>
        <RightBar></RightBar>
        <Description></Description>
                
      </div>
  );
  }
  
}

export default App;
