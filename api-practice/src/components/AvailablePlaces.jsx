import { useState, useEffect } from "react";
import Error from "./Error";
import Places from "./Places";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http";

import { useFetch } from '../hooks/useFetch';

async function fetchSortedPlaces() {
  const places = await fetchAvailablePlaces();

  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        places,
        position.coords.latitude,
        position.coords.longitude
      );

      resolve(sortedPlaces)
    })
  })
}

const AvailablePlaces = ({ onSelectPlace }) => {
  const {isFetching, error, fetchedData: availablePlaces} = useFetch(fetchAvailablePlaces, []);// If you want sort places by location then replace fetchAvailable place by fetchSortedPlaces.

  // useEffect(() => {
  //   async function fetchPlaces() {
  //     const places = await fetchAvailablePlaces();
  //     setIsFetching(true);

  //     try {
        
        
  //       setAvailablePlaces(places)
  //       setIsFetching(false);
  //     } catch (error) {
  //       setError({
  //         message: error.message || "An error has occurred!",
  //       });

  //       setIsFetching(false);
  //     }
  //   }

  //   fetchPlaces();
  // }, []);

  if (error) {
    return <Error title="Error" message={error.message} />;
  }

  return (
    <Places
      title={"Available Places"}
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching places data..."
      fallbackText="No places available"
      onSelectPlace={onSelectPlace}
    />
  );
};

export default AvailablePlaces;
