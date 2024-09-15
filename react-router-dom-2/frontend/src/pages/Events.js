import React, { Suspense } from "react";
import { Await, Link, defer, json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";
import { eventsLoader } from "./eventsLoader";

const EventsPage = () => {
  const { events } = useLoaderData();

  return (
    <>
      <h1>EventsPage</h1>
      <Suspense fallback={<p style={{ textAlign: "center" }}>loading...</p>}>
        {" "}
        <Await resolve={events}>
          {(loadEvents) => <EventsList events={loadEvents} />}
        </Await>
      </Suspense>
    </>
  );
};

export default EventsPage;

export const loader = async () => {
  return defer({
    events: eventsLoader(),
  });
};
