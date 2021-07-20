import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import ReactPlayer from 'react-player/youtube'

const Hello = () => {
  return (
    <ReactPlayer 
      url='https://www.youtube.com/watch?v=m_ZW1mxGh0s'
      playing={true}
      width='100%'
      height='100%'
    />
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
