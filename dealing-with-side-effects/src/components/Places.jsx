import { PlacesStyles, UlWrapper, ListItem, Button } from "./Styles";

const Places = ({ title, fallbackText, places, onSelectPlace }) => {
  return (
    <PlacesStyles>
      <h2>{title}</h2>
      {places.length === 0 && <p>{fallbackText}</p>}

      {places.length > 0 && (
        <UlWrapper>
          {places.map((place) => {
            return (
              <ListItem key={place.id}>
                <Button onClick={() => onSelectPlace(place.id)}>
                  <img src={place.image.src} alt={place.image.alt} />
                  <h3>{place.title}</h3>
                </Button>
              </ListItem>
            );
          })}
        </UlWrapper>
      )}
    </PlacesStyles>
  );
};

export default Places;
