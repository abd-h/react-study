import React from "react";
import { styled } from "styled-components";

const h2color = "#affbfd",
borderStyles = `
0.5px solid rgb(2,185,185)`,
 borderRadius = "8px",
 fontFamily = `Raleway, san-serif;`

export const MainDiv = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@10..48,400;10..48,700&family=Raleway:wght@400;700&display=swap");

  * {
    box-sizing: border-box;
  }

  font-family: "Bricolage Grotesque", san-serif;
  line-height: 1.5;
  color: #defaf8;
  overflow-x: hidden;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  background: linear-gradient(180deg, #1f1c2c 0%, #133036 100%);
  min-height: 100vh;

  div {
    max-width: 90vw;
    margin: auto;
  }
`;

export const HeaderStyles = styled.header`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 2rem;
  margin-block-start: 1rem;
  // border: ${borderStyles};
  border-radius: ${borderRadius};

  img {
    width: 5rem;
    height: 5rem;
    object-fit: contain;
    filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.4));
  }

  h1 {
    font-size: 3rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 10px;
  }

  p {
    width: 30vmax;
    font-size: 1.25rem;
    letter-spacing: 1.1px;
  }
`;

export const MainElement = styled.main`
  margin-block: 0;
`;

export const PlacesStyles = styled.section`
  max-width: 85rem;
  margin-block: 1rem;
  border: ${borderStyles};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 2rem;
  border: ${borderStyles};
  border-radius: ${borderRadius};
  margin-inline: auto;
  h2 {
    font-size: 2rem;
    font-weight: 600;
    color: ${h2color};
  }

  p {
    font-size: 1.25rem;
    letter-spacing: 1.1px;
  }
`;

export const UlWrapper = styled.ul`
  max-width: 80rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  margin: 2rem auto;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  position: reletive;
  display: flex;
  flex-direction: column;
  border-radius: {borderRadius};
  background: #1f1c2c;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  animation: slide-up-fade-in 0.3s ease-out forward;

  &:nth-child(odd) button:hover,
  &:nth-child(odd) button:focus {
    box-shadow: 0 0 8px rgba(255, 217, 0, 0.6);
    border-radius: ${borderRadius};
    transform: rotate(5deg);
  }
  &:nth-child(even) button:hover,
  &:nth-child(even) button:focus {
    box-shadow: 0 0 8px rgba(255, 217, 0, 0.6);
    border-radius: ${borderRadius};
    transform: rotate(5deg);
  }
`;

export const Button = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  padding: 0;
  transition: all 0.2s ease-in-out;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${borderRadius};
  }
  & h3 {
    font-family: ${fontFamily};
    font-weight: normal;
    font-size: 0.9rem;
    position: absolute;
    bottom: 0;
    right: 1rem;
    margin: 1rem auto;
    background-color: #feee86;
    border-radius: 4px;
    padding: 0.15rem 0.35rem;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
    color: #000;
  }
`;

 export const DeleteConfirmationStyles = styled.section`
  padding: 1rem;
  
  h2 {
    font-family: ${fontFamily};
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
    color: #5d0909;
  }

  h2 + p {
    margin: 0 auto;
    font-size: 1.15rem;
    max-width: 38ch;
    color: #804242;
    text-transform: uppercase;
  }

  p#confirmation-actions {
    margin-top: 1rem;
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }

  button.btn {
    cursor: pointer;
    font-family: ${fontFamily};
    font-size: 1rem;
    padding-block: 0.5rem;
    padding-inline: 1.5rem;
    border: none;
    border-radius: 4px;
    background-color: #5d0909;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
    color: #fff;

    &:hover,
    &:focus {
      background-color: #3e0505;
    }
  }

  button.text {
    background-color: transparent;
    border: none;
    padding: 0;
    font-family: ${fontFamily};
    font-size: 1rem;
    color: #5d0909;
  }
 `;
 
 export const ModalDialog = styled.dialog`
 &.modal::backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100vh;
  background: rgba(0,0,0, 0.6);
 }

 &.modal {
  min-width: 30rem;
  padding: 0;
  z-index: 2;
  background: #d5x7bc;
  border-radius: ${borderRadius};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  animation: slide-down-fade-in 0.3s ease-out forward;
 }

 &@keyframes slide-down-fade-in {
  from {
    opacity: 0;
    transform: translateY(-3rem);
  }
  to {
    opacity: 1;
    transform: translateY(0rem);
  }
 }
 &@keyframes slide-down-fade-in {
  from {
    opacity: 0;
    transform: translateY(3rem);
  }
  to {
    opacity: 1;
    transform: translateY(0rem);
  }
 }
 `;
 
// export const ProgressBar = styled.progress`
 


//  progress[value] {
//       /* style rules */
//     }
//     progress[value]::-webkit-progress-bar {
//       /* style rules */
//       background-color: red;
//     }
//     progress[value]::-webkit-progress-value {
//       /* style rules */
//     }
//     progress[value]::-moz-progress-bar {
//       /* style rules */
//     }

//     /* Indeterminate: */

//     progress:not([value]) {
//       /* style rules */
//     }
//     progress:not([value])::-webkit-progress-bar {
//       /* style rules */
//     }
//     progress:not([value])::-webkit-progress-value {
//       /* style rules */
//     }
//     progress:not([value])::-moz-progress-bar {
//       /* style rules */
//     }
// `;
