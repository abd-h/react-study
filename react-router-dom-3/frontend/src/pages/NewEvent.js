import React from "react";
import EventForm from "../components/EventForm";
import { json, redirect, useActionData } from "react-router-dom";

const NewEventPage = () => {
  const event = useActionData();
  
  return (
    <>
      <h1>NewEventPage</h1>
      <EventForm method="post" />
    </>
  );
};

export default NewEventPage;

export const action = async ({ request, params }) => {
  const method = request.method;
  const eventId = params.eventId;

  const data = await request.formData();

  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  let url = "http://localhost:8080/events";

  if (method === "PATCH") {
    url = "http://localhost:8080/events/" + eventId;
  }

  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Event detail not saved!" }, { status: 500 });
  }

  return redirect("/events");
};
