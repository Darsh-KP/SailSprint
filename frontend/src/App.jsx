import { useState } from "react"
import './App.css';
import logo from "./logo1.png"

import { BrowserRouter as Router, Swtich, Route } from 'react-router-dom'
import Navbar from "./components/navbar"

function App() {
	return (
		<>
			<router>
				<Navbar />
				<Switch>
					<Route path="/" exact/>
				</Switch>
			</router>
			<body>
  				<h1>SailSprint</h1>
				<img src={logo}/>
			</body>
		</>
	)
}

export default App
