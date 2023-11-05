import { useEffect, useState } from "react"
import api from "../helpers/axios"

export default function Cards() {
	const [events, setEvents] = useState({})

    useEffect(() => {
        const getEvents = async () => {
            const allEvents = await api.get("/events")
            let allEventsWithCount = []
            
            for (const event of allEvents) {
                const viewerCount = await api.get(`/viewers/${event.event_id}`)
                const racerCount = await api.get(`/racers/${event.event_id})`)
                
                const eventWithCounts = {
                    ...event,
                    viewerCount: viewerCount,
                    racerCount: racerCount
                }

                allEventsWithCount.push(eventWithCounts)
            }

            setEvents(allEventsWithCount)
        }
    }, [])

	return <div>Cards</div>
}
