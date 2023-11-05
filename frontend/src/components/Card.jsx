import { useState } from "react"

export default function Card({ event }) {
	return (
		<div>
            <h1>{event.event_name}</h1>
            <p>{event.hostname}</p>
            <p>Location</p>
            <p>{event.date_time}</p>
            <p>{event.price}</p>
            <button>Join as Racer</button>
            <button>Join as Viewer</button>
		</div>
	)
}
