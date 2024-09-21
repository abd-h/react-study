import React, { Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";
import { eventsLoader } from "./EventLoader";

const EventsPage = () => {
  const {events} = useLoaderData();
  
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvent) => <EventsList events={loadedEvent} />}
        </Await>
      </Suspense>
    </>
  );
};

export default EventsPage;



export const loader = async ({ request, params }) => {
  return defer({
    events: eventsLoader(),
  });
};

// export const loader = async ({ request, params }) => {
//     const response = await fetch('http://localhost:8080/events');

//     if (!response.ok) {
//         throw json({ message: 'events not found' }, { status: 500 });
//     } else {
//         const resData = await response.json();
//         return resData.events;
//     }
// }
