import { useContext, useEffect, useState } from "react";

import logoImg from "../assets/logo.png";
import { PlacesCtx } from "../Store/PlacesContext";
import { MainElement, HeaderStyles } from "./Styles";
import Places from "./Places";
import Modal from "./Modal";
import DeleteConfirmation from "./DeleteConfirmation";
import { sortPlacesByDistance } from "../loc";

const PlacesContainer = () => {
  const {
    AVAILABLE_PLACES,
    handleSelectPlace,
    handleStartRemovePlace,
    handleRemovePlace,
    handleStopRemovePlace,
    pickedPlaces,
    open,
  } = useContext(PlacesCtx);
  const [availablePlaces, setAvailablePlace] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        availablePlaces,
        position.coords.latitude,
        position.coords.longitude
      );
      setAvailablePlace(sortedPlaces);
    });
    //   return storedPickPlaces(storedPlaces);
  }, []);

  return (
    <MainElement>
      <Modal open={open} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onConfirm={handleRemovePlace}
          onCancel={handleStopRemovePlace}
        />
      </Modal>
      <HeaderStyles>
        <img src={logoImg} alt="logo" />
        <h1>Place Picker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited
        </p>
      </HeaderStyles>
      <Places
        title="I like to visit ..."
        fallbackText="select avalable places you like to visit"
        places={pickedPlaces}
        onSelectPlace={handleStartRemovePlace}
      />
      <Places
        title="Available Places"
        places={AVAILABLE_PLACES}
        fallbackText="...."
        onSelectPlace={handleSelectPlace}
      />
    </MainElement>
  );
};

export default PlacesContainer;
