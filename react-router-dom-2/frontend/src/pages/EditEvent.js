import React from 'react';
import EventForm from '../components/EventForm';
import { useRouteLoaderData } from 'react-router-dom';


const EditEventPage = () => {
  const event = useRouteLoaderData('event-detail');


 
  return (
    <>
      <h1>EditEventPage</h1>
      <EventForm method='patch' event={event.event}/>
    </>
  );
}

export default EditEventPage;

