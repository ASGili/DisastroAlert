import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import EventList from '../components/EventList';
import EventDetail from '../components/EventDetail';
import CategoryList from '../components/CategoryList';


const EventContainer = () => {

    const [events, setEvents] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedEvent, setSelectedEvent] = useState("");
    
    const {category} = useParams()

    useEffect(() => {getEvents();}, [])
    useEffect(() => {setSelectedCategory(category);}, [])

    const getEvents = function(){
        console.log("getEvents")
    fetch('https://eonet.gsfc.nasa.gov/api/v3/events')
    .then(res => res.json())
    .then(events => setEvents(events.events))
    }

    const handleEventSelect = (event) => {
        const eventID = event.target.value
        const findEvent = events.find((event) => {
            return eventID === event.id
        })
        setSelectedEvent(findEvent)
    }

    const handleCategorySelected = (event) => {
        setSelectedCategory(event.target.textContent)
        
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