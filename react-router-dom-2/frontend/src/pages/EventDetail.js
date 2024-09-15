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
import { eventLoader, eventsLoader } from "./eventsLoader";
import EventsList from "../components/EventsList";

const EventDetailPage = () => {
  const params = useParams();
  const { event, events } = useRouteLoaderData("event-detail");



  return (
    <>
      <h1>EventDetailPage</h1>
      <h2> {params.eventId}</h2>
      <Suspense fallback={ <p style={ { textAlign: 'center' } }>Loading...</p> } ><Await resolve={ event } >
      {(loaderEvent) => <EventItem event={loaderEvent} />}
      </Await></Suspense>

      <Suspense fallback={ <p style={ { textAlign: 'center' } }>Loading...</p> } >
        <Await resolve={ events } >
        {(loaderEvents) => <EventsList events={loaderEvents} />}
        </Await>
      </Suspense>
    </>
  );
};

export default EventDetailPage;



export const loader = async ({ params }) => {
  const id = params.eventId;
  return defer({
    event: await eventLoader(id),
    events: eventsLoader(),
  })
};

// Action for deleting events
export const action = async ({ request, params }) => {
  const method = request.method;
  const id = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + id, {
    method: method,
  });

  if (!response.ok) {
    throw json({ message: "Could not delete event data" }, { status: 500 });
  }
  return redirect("/events");
};
