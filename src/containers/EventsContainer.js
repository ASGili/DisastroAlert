import React, { useState, useEffect } from 'react';
import EventList from '../components/EventList';
import EventDetail from '../components/EventDetail';
import CategoryList from '../components/CategoryList';
import '../App.css';


const EventContainer = () => {

    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

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

    const handleCategorySelected = (event) => {
        setSelectedCategory(event.target.value)
    }

    let filteredEvents = []
    if (selectedCategory) { 
        filteredEvents = events.filter((event) => {
            return event.categories[0].title === selectedCategory
        })
    }

    return (
        <>
        <CategoryList events={events} handleCategorySelected={handleCategorySelected}/>
        <EventList events={filteredEvents} handleEventSelect={handleEventSelect}/>
        <EventDetail event={selectedEvent}/>
        </>
    )
}

export default EventContainer