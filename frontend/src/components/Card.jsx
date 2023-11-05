import api from "../helpers/axios"
import { useUser } from "@clerk/clerk-react"

export default function Card({ event }) {
    const { user } = useUser()

	const joinAsViewer = () => {
		// try {
		// 	await api.post("/join/viewer", {
        //      userId: user.id,
        //      username: user.username,
		// 		event: event.event_id,
		// 	})
		// } catch (err) {
		// 	console.error(err)
		// }
		console.log("testing viewer")
	}

	const joinAsRacer = () => {
		// try {
		// 	await api.post("/join/racer", {
        //      userId: user.id,
        //      username: user.username,
		// 		event: event.event_id,
		// 	})
		// } catch (err) {
		// 	console.error(err)
		// }
		console.log("testing racer")
	}

	return (
		<div className="card">
			<h1>{event.event_name}</h1>
			<p>{event.hostname}</p>
			<p>Location</p>
			<p>{event.date_time}</p>
			<p>{event.price}</p>
			<button onClick={joinAsRacer}>Join as Racer</button>
			<button onClick={joinAsViewer}>Join as Viewer</button>
		</div>
	)
}
