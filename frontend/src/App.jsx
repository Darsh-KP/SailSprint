import { useState } from "react"
import './App.css';
import { BrowserRouter as router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/navbar"

// Image imports for the home page
import boat from "./assets/Sailboat.png"
import beach from "./assets/PalmBeach.png"
import cloudsLeft from "./assets/CloudsLeft.png"
import cloudsRight from "./assets/CloudsRight.png"

import { SignInButton } from "@clerk/clerk-react";

function App() {
	return (
		<>
			<div><Navbar /></div>
			<body>
				<div className="overlay">
					<img src={boat} className="home-boat" />
					<img src={beach} className="home-beach" />
					<img src={cloudsLeft} className="home-clouds-left" />
					<img src={cloudsRight} className="home-clouds-right" />
				</div>
				<h1>hello</h1>
			</body>
		</>
	)
}

export default App
