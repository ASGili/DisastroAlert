const EventList = ({events, handleEventSelect}) => {

    const listOfEvents = events.map((event) => {
        return (
            <option value={event.id} key={event.id}>{event.title}</option>
        )
    })


    return (
        <div>
            <select onChange={handleEventSelect}>
            {listOfEvents}
            </select>
        </div>
    )
}





export default EventList