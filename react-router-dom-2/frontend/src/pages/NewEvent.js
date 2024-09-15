import React from 'react';
import EventForm from '../components/EventForm';
import { json, redirect, useActionData } from 'react-router-dom';

const NewEventPage = () => {

  return (
    <>
      <h1>NewEventPage</h1>
      <EventForm method='post' />
    </>
  );
}

export default NewEventPage;

// export const action = async ({ request, parms }) => {
//   const data = await request.formData();
  
//   const eventData = {
//     title: data.get('title'),
//     date: data.get('date'),
//     image: data.get('image'),
//     description: data.get('description')
//   }
  
//   const response = await fetch('http://localhost:8080/events', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(eventData),
//   })

//   if (response.status === 422) {
//     return response;
//   }

//   if (!response.ok) {
//     throw json({message: 'New event data not sent!'})
//   }
//   return redirect('/events')
// }