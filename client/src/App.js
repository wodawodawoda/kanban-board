import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import Kanban from './modules/kanban/Kanban'
import Navbar from './modules/navbar/Navbar'
import Sidebar from './modules/sidebar/Sidebar'

class App extends Component {
  render() {
    return (
    	<div className="app container-fluid p-0">
				<input id="toggleSidebar" className="btn btn-primary" type="checkbox" />
				<Navbar />
				<Sidebar />
				<Route path='/' component={Kanban}/>
			</div>
    );
  }
}

export default App;
