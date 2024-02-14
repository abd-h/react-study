import { PlacesContext } from "./Store/PlacesContext";
import { MainDiv } from "./components/Styles.jsx";
import PlacesContainer from "./components/PlacesContainer";


const App = () => {

  return (
    <PlacesContext>
      <MainDiv>
        <PlacesContainer />
      </MainDiv>
    </PlacesContext>
  );
};

export default App;
