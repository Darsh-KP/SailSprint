import { useEffect, useState } from "react"
import api from "../helpers/axios"
import Card from "./card"
import { Link } from "react-router-dom"

export default function Cards() {
	const [events, setEvents] = useState([])

	useEffect(() => {
		const getEvents = () => {
            // try {
            //     const allEvents = await api.get("/events")
            //     let allEventsWithCount = []
    
            //     for (const event of allEvents) {
            //         const viewerCount = await api.get(`/viewers?event_id=${event.event_id}`)
            //         const racerCount = await api.get(`/racers?event_id=${event.event_id})`)
            //         const hostname = await api.get(`/events?event_id=${event.host_id}`)
    
            //         const eventWithCounts = {
            //             ...event,
            //             viewerCount: viewerCount,
            //             racerCount: racerCount,
            //             hostname: hostname
            //         }
    
            //         allEventsWithCount.push(eventWithCounts)
            //     }
    
            //     setEvents(allEventsWithCount)
            // } catch (err) {
            //     console.error(err)
            // }
            const mockEvents = [
                {
                    event_id: 1,
                    event_name: "Test event",
                    hostname: "Test host",
                    date_time: "12:00pm Sunday",
                    price: "$2.00"
                },
                {
                    event_id: 2,
                    event_name: "test event",
                    hostname: "test host",
                    date_time: "12:00pm Sunday",
                    price: "$2.00"
                },
                {
                    event_id: 3,
                    event_name: "test event",
                    hostname: "test host",
                    date_time: "12:00pm Sunday",
                    price: "$2.00"
                },
                {
                    event_id: 4,
                    event_name: "test event",
                    hostname: "test host",
                    date_time: "12:00pm Sunday",
                    price: "$2.00"
                },
                {
                    event_id: 5,
                    event_name: "test event",
                    hostname: "test host",
                    date_time: "12:00pm Sunday",
                    price: "$2.00"
                }
            ]

            setEvents(mockEvents)
		}

        getEvents()

	}, [])

	return (
		<div className="cards">
			{events.length > 0 ? (
				events.map((event) => (
					<Card key={event.event_id} event={event} />
				))
			) : (
				<p>There are no events...</p>
			)}
		</div>
	)
}
