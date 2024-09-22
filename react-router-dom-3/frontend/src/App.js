// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// Done.
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// Done.
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// Done.
// 4. Add properly working links to the MainNavigation
// Done.
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// Done.
// 6. Output a list of dummy events to the EventsPage
// Done.
//    Every list item should include a link to the respective EventDetailPage
// Done.
// 7. Output the ID of the selected event on the EventDetailPage
// Done.
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
// Done..

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home';
import EventsPage, { loader as eventLoader } from './pages/Events';
import EventDetailPage, {
  loader as EventDetailLoader,
  action as deleteEventAction,
} from "./pages/EventDetail";
import EditEventPage from './pages/EditEvent';
import NewEventPage, { action as manipulateEventAction } from './pages/NewEvent';
import RouteLayout from './pages/RouteLayout';
import EventLayout from './pages/EventLayout';
import ErrorPage from './pages/Error';
import NewsLetterPage from './pages/NewsLetter';
import { action as newsletterAction } from './pages/NewsLetter';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventLayout />,
        children: [
          { index: true, element: <EventsPage />, loader: eventLoader },
          {
            path: ":eventId",
            id: "event-detail",
            loader: EventDetailLoader,

            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: manipulateEventAction,
              },
            ],
          },

          {
            path: "new",
            element: <NewEventPage />,
            action: manipulateEventAction,
          },
        ],
      },
      { path: 'newsletter', element: <NewsLetterPage />, action: newsletterAction},
    ],
  },
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
