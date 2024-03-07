import { useState, useEffect } from "react";
import Error from "./Error";
import Places from "./Places";
// import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http";

const AvailablePlaces = ({ onSelectPlace }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      const places = await fetchAvailablePlaces();
      setIsFetching(true);

      try {
        
        
        setAvailablePlaces(places)
        setIsFetching(false);
      } catch (error) {
        setError({
          message: error.message || "An error has occurred!",
        });

        setIsFetching(false);
      }
    }

    fetchPlaces();
  }, []);

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
