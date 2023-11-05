import { useState } from "react"
import './App.css';
import { BrowserRouter as router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/navbar"

// Image imports for the home page
import boat from "./assets/Sailboat.png"

import { SignInButton } from "@clerk/clerk-react";

function App() {
	return (
		<>
			<div><Navbar /></div>
			<body>
				<div className="overlay">
					<img src={boat} className="home-boat" />
				</div>
  				
			</body>
			<SignInButton />
		</>
	)
}

export default App
