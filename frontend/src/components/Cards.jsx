import { useEffect, useState } from "react"
import api from "../helpers/axios"
import Card from "./card"

export default function Cards() {
	const [events, setEvents] = useState([])

	useEffect(() => {
		const getEvents = () => {
            // try {
            //     const allEvents = await api.get("/events")
            //     let allEventsWithCount = []
    
            //     for (const event of allEvents) {
            //         const viewerCount = await api.get(`/viewers/${event.event_id}`)
            //         const racerCount = await api.get(`/racers/${event.event_id})`)
            //         const hostname = await api.get(`/users/getUsername/${event.host_id}`)
    
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
		<div>
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
