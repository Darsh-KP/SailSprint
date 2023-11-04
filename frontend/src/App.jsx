import { useState } from "react"
import './App.css';
import logo from "./logo1.png"

import { BrowserRouter as router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/navbar"

function App() {
	return (
		<>
			<div><Navbar /></div>
			<body>
  				<h1>SailSprint</h1>
				<img src={logo}/>
			</body>
		</>
	)
}

export default App
