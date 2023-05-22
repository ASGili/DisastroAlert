const EventDetail = ({event}) => {

    let declareCategory 
    if (event.categories) {
        return declareCategory = <p>{event.categories.title}</p>
    }

    return (
        <section>
            <h3>{event.title}</h3>
            {declareCategory}
        </section>
    )
}



export default EventDetail