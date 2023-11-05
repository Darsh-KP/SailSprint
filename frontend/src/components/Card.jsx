import api from "../helpers/axios"
import { useUser } from "@clerk/clerk-react"

// Import images
import dateIcon from "../assets/DateIcon.png"
import mapIcon from "../assets/MapIcon.png"
import priceIcon from "../assets/PriceIcon.png"

export default function Card({ event }) {
	const { user } = useUser()

	const joinAsViewer = async () => {
		try {
			await api.post("/join/viewer", {
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
			await api.post("/join/racer", {
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
			<button onClick={joinAsRacer}>Join as Racer</button>
			<button onClick={joinAsViewer}>Join as Viewer</button>
		</div>
	)
}
