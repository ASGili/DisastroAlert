import React, { useState, useEffect } from 'react';
import EventList from '../components/EventList';
import EventDetail from '../components/EventDetail';

const EventContainer = () => {

    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState("");

    useEffect(() => {getEvents();}, [])

    const getEvents = function(){

    fetch('https://eonet.gsfc.nasa.gov/api/v3/events')
    .then(res => res.json())
    .then(events => setEvents(events.events))
    }

    const handleEventSelect = (id) => {
        const eventID = id.target.value
        const findEvent = events.find((event) => {
            return eventID === event.id
        })
        setSelectedEvent(findEvent)
    }

    return (
        <>
        <EventList events={events} handleEventSelect={handleEventSelect}/>
        <EventDetail event={selectedEvent}/>
        </>
    )
}

export default EventContainer