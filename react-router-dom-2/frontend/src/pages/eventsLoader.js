import { json } from "react-router-dom";

export const eventLoader = async (id) => {
    const response = await fetch('http://localhost:8080/events/' + id);

    if (!response.ok) {
        throw json({message: 'Event data not fetched!'})
    } else {
        const resData = await response.json();
        return resData.event
    }
}

export const eventsLoader = async () => {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        throw json({ message: 'Events data not loaded!' }, { status: 500 });
    } else {
        const resData = await response.json();
        return resData.events;
    }
};
