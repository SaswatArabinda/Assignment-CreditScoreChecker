import React from 'react';
import { Sidebar } from './components/sidebar';
import { SingleSourceMain } from './components/singleSourceMain';
import { BatchRequestMain } from './components/batchRequestMain';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Sidebar />
        <Route path="/" exact  render={() => <h3 id="main" style={{'margin-top': '15px'}}>Please select from the side panel.</h3>} />
        <Route path="/Single-Source" exact component={SingleSourceMain} />
        <Route path="/Batch-Request" exact component={BatchRequestMain} />
      </div>
    </Router>
  );
}

export default App;
