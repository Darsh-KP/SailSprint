import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { ClerkProvider } from "@clerk/clerk-react"

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLIC_KEY}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ClerkProvider>
	</React.StrictMode>
)
