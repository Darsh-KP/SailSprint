import api from "../helpers/axios"
import { useUser } from "@clerk/clerk-react"
import "./card.css"
// Import images
import dateIcon from "../assets/DateIcon.png"
import mapIcon from "../assets/MapIcon.png"
import priceIcon from "../assets/PriceIcon.png"
import { SignedIn, SignInButton, SignedOut, SignUpButton } from "@clerk/clerk-react"

export default function Card({ event }) {
	const { user } = useUser()

	const joinAsViewer = async () => {
		try {
			await api.post("/viewers/join", {
				userId: user.id,
				username: user.username,
				event: event.event_id,
			})
		} catch (err) {
			console.error(err)
		}
	}

	const joinAsRacer = async () => {
		try {
			await api.post("/viewers/join", {
				userId: user.id,
				username: user.username,
				event: event.event_id,
			})
		} catch (err) {
			console.error(err)
		}
	}

	return (
		<div className="card">
			<h1>{event.event_name}</h1>
			<p className="host">{event.hostname}</p>
			<p>
				<img src={mapIcon} className="tinyIcon" />
				Location
			</p>
			<p>
				<img src={dateIcon} className="tinyIcon" />
				{event.date_time}
			</p>
			<p>
				<img src={priceIcon} className="tinyIcon" />
				{event.price}
			</p>
			<SignedIn>
			<button onClick={joinAsRacer}>Join as Racer</button>
			<button onClick={joinAsViewer}>Join as Viewer</button>
			</SignedIn>
			<SignedOut>
			<div>
            	<SignInButton className="joinracer-button">
					<button>Join as Racer</button>
				</SignInButton>
            </div>
            <div>
				<SignUpButton className="joinviewer-button">
					<button>Join as Viewer</button>
				</SignUpButton>
            </div>
			</SignedOut>
		</div>
	)
}
