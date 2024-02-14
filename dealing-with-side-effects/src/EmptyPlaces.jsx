// import React, { useContext } from "react";
// import { PlacesStyles, UlWrapper } from "./components/Styles";

// import { PlacesCtx } from "./Store/PlacesContext";

// const EmptyPlaces = ({ title, fallbackText }) => {
//   const { pickedPlaces, handleStartRemovePlace } = useContext(PlacesCtx);
//   return (
//     <PlacesStyles>
//       <h2>{title}</h2>
//       {pickedPlaces.lenght === 0 && <p>{fallbackText} </p>}
//       {pickedPlaces.lenght > 0 && (
//         <UlWrapper>
//           {pickedPlaces.map((place) => {
//             <li key={place.id}>
//               <button onClick={() => handleStartRemovePlace(place.id)}>
//                 <img src={place.image.src} alt={place.image.alt} />
//                 <h3>{place.title}</h3>
//               </button>
//             </li>;
//           })}
//         </UlWrapper>
//       )}
//     </PlacesStyles>
//   );
// };

// export default EmptyPlaces;
