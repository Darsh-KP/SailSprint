import { useState } from "react"
import './App.css';
import logo from "./logo1.png"
function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<body>
  				<h1>SailSprint</h1>
				<img src={logo}/>
			</body>

		</>
	)
}

export default App
