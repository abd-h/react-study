import React, {
  createContext,
  useRef,
  useReducer,
  useCallback,
  useState,
} from "react";

import { AVAILABLE_PLACES } from "../data";

export const PlacesCtx = createContext({
  handleStartRemovePlace: () => {},
  handleStopRemovePlace: () => {},
  handleSelectPlace: () => {},
  handleRemovePlace: () => {},
  modal: "",
  selectedPlace: "",
  AVAILABLE_PLACES: [],
});

// fetching from local storage
const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
const storedPlaces = storedIds.map((id) =>
  AVAILABLE_PLACES.find((place) => place.id === id)
);

function placesReducer(state, action) {
  if (action.type === "MODAL_IS_OPEN") {
    let modalIsOpen = (state.modalIsOpen = action.payload);
    return {
      places: [...state.places],
      modalIsOpen,
    };
  }
  if (action.type === "MODAL_IS_CLOSED") {
    let modalIsOpen = (state.modalIsOpen = action.payload);
    return {
      places: [...state.places],
      modalIsOpen,
    };
  }
  if (action.type === "PLACES") {
    if (state.places.some((place) => place.id === action.payload)) {
      return state;
    }
    const place = AVAILABLE_PLACES.find((place) => place.id === action.payload);
    return {
      ...state.places,
      places: [place, ...state.places],
    };
  }
  if (action.type === "MODAL") {
    const places = state.places.filter(
      (place) => place.id !== action.payload.selectedPlace.current
    );

    return {
      ...state.places,
      places,
    };
  }
}

export const PlacesContext = ({ children }) => {
  const [pickedPlaces, despatch] = useReducer(placesReducer, {
    places: storedPlaces,
    modalIsOpen: false,
  });
  // const modal = useRef();
  const selectedPlace = useRef();

  const handleStartRemovePlace = (id) => {
    despatch({
      type: "MODAL_IS_OPEN",
      payload: true,
    });
    selectedPlace.current = id;
  };

  const handleStopRemovePlace = () => {
    despatch({
      type: "MODAL_IS_CLOSED",
      payload: false,
    });
  };

  const handleSelectPlace = (id) => {
    despatch({
      type: "PLACES",
      payload: id,
    });

    const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
    if (storedIds.indexOf(id) === -1) {
      localStorage.setItem(
        "selectedPlaces",
        JSON.stringify([id, ...storedIds])
      );
    }
  };

  const handleRemovePlace = useCallback(function handleRemovePlace() {
    despatch({
      type: "MODAL",
      payload: {
        selectedPlace,
      },
    });
    despatch({
      type: "MODAL_IS_CLOSED",
      payload: false,
    });
    const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
    localStorage.setItem(
      "selectedPlaces",
      JSON.stringify(storedIds.filter((id) => id !== selectedPlace.current))
    );
  }, []);
 
  //No prop drilling here
  const placesCtxValue = {
    AVAILABLE_PLACES,
    pickedPlaces: pickedPlaces.places,
    handleStartRemovePlace,
    handleStopRemovePlace,
    handleSelectPlace,
    handleRemovePlace,
    open: pickedPlaces.modalIsOpen,
    selectedPlace,
  };
  return (
    <PlacesCtx.Provider value={placesCtxValue}>{children} </PlacesCtx.Provider>
  );
};
