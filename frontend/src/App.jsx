import { useState } from "react"
import './App.css';
import logo from "./logo1.png"
import { BrowserRouter as router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/navbar"
import { SignInButton } from "@clerk/clerk-react";

function App() {
	return (
		<>
			<Navbar />
			<h1>SailSprint</h1>
			<img src={logo}/>
			<SignInButton />
			<p>ioahsdoihasd</p>
		</>
	)
}

export default App
