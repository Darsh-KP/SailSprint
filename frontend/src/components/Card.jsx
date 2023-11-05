import api from "../helpers/axios"

export default function Card({ event }) {
	const joinAsViewer = async () => {
		try {
			await api.post("/join/viewer", {
				event: event.event_id,
			})
		} catch (err) {
			console.error(err)
		}
	}

	const joinAsRacer = async () => {
		try {
			await api.post("/join/racer", {
				event: event.event_id,
			})
		} catch (err) {
			console.error(err)
		}
	}

	return (
		<div>
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
