const EventDetail = ({event}) => {

    let declareCategory 
    if (event.categories) {
        return declareCategory = 
        <>
        <h3>{event.title}</h3>
        <p>This event is in the category of: {event.categories[0].title}</p>
        </>
    } else {

    return (
        <div>
            {declareCategory}
        </div>
    )
    }
}



export default EventDetail