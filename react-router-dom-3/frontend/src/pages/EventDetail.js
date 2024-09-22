import React, { Suspense } from "react";
import {
  Await,
  defer,
  json,
  redirect,
  useParams,
  useRouteLoaderData,
} from "react-router-dom";
import EventItem from "../components/EventItem";
import { eventDetailLoader, eventsLoader } from "./EventLoader";
import EventsList from "../components/EventsList";

const EventDetailPage = () => {
  const params = useParams();
  const {events, event} = useRouteLoaderData("event-detail");

  return (
    <>
      <h1>EventDetailPage</h1>
      <h2>EventId: {params.eventId} </h2>

      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={event}>
          {(eventLoader) => <EventItem event={eventLoader} />}
        </Await>
      </Suspense>
      <Suspense fallback={ <p>Loading...</p> }>
        <Await resolve={events}>
        {(eventsLoader) => <EventsList events={eventsLoader} />}
        </Await>
      </Suspense>
    </>
  );
};

export default EventDetailPage;

export const loader = async ({ request, params }) => {
  const eventId = params.eventId;
  return defer({
    events: eventsLoader(),
    event: await eventDetailLoader(eventId),
  })
}

// export const loader = async ({ request, params }) => {
//   const eventId = params.eventId;

//   const response = await fetch("http://localhost:8080/events/" + eventId);

//   if (!response.ok) {
//     throw json({ message: "event data not found" }, { status: 500 });
//   } else {
//     const resData = await response.json();
//     return resData.event;
//   }
// };



export const action = async ({ request, params }) => {
  const method = request.method;
  const eventId = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: method,
  });

  if (!response.ok) {
    throw json({ message: "Event not deleted" }, { status: 500 });
  }

  return redirect("/events");
};
