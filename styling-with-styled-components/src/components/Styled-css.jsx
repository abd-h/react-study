import styled from "styled-components";

const robotoFfamily = `'Roboto', sans-serif`;

export const HeaderStyles = styled.header`
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&family=Roboto:wght@400;700&display=swap");
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 3rem;
    height: 3rem;
    filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.6));
  }

  & h1 {
    text-transform: uppercase;
    letter-spacing: 0.6rem;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: bold;
    font-size: 2.5rem;
    background: linear-gradient(90deg, #e781fb 40%, #8e76fa 60%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transport;
  }
`;

export const QuizStyles = styled.section`
  max-width: 50rem;
  margin: auto;
  padding: auto;
  background: linear-gradient(180deg, #3e2a60 0%, #321061 100%);
  border-radius: 8px;
  text-align: center;

  #question {
    padding-bottom: 1.5rem;
  }

  #question h2 {
    font-family: robotoFfamily;
    color: #c1b2dd;
    font-size: 1.5rem;
    font-weight: normal;
    margin: 0.5rem 0 2.5rem 0;
  }

  #question progress {
    width: 50%;
    height: 0.5rem;
    background: #9e5ef8;
    border-radius: 24px;
    margin: 0;
  }
  #question progress::-webkit-progress-bar {
    background: #6a558a;
    border-radius: 24px;
  }

  #question progress::-webkit-progress-value {
    background: #9e5ef8;
    border-radius: 24px;
  }
  #question progress.answered {
    background: #f8e59c;
  }
  #question progress.answered::-webkit-progress-value {
    background: #f8e59c;
  }
  #question progress.answered::-webkit-progress-bar {
    background: #6a558a;
  }

  ul#answers {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
  #question {
    & div ul#answers li {
      width: 90%;
      margin: 0 auto;
    }
  }
`;

export const ButtonCss = styled.button`
 
    display: inline-block;
    width: 100%;
    font-family: "Roboto Condensed", sans-serif;
    font-size: 0.9rem;
    padding: 1rem 2rem;
    border: none;
    border-radius: 24px;
    background: #6cb7f5;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover,
    &:focus {
      background: #9d5af5;
    }
  

  &.selected {
    background: #f5a76c;
    color: #2c203d;
  }

   &.correct {
    background: #5af59d;
    color: #2c203d;
  }

   &.wrong {
    background: #f55a98;
    color: #2c203d;
  }
`;

export const QuizIscomplete = styled.div`
  background: linear-gradient(180deg, #a17eda 0%, #895fc4 100%);
  &#summary {
    max-width: 40rem;
    margin: 2rem auto;
    padding: 2rem;
    color: #191321;
    border-radius: 8px;
    box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.6);
    animation: slide-in-from-bottom 0.7s ease-out;
  }

  &#summary img {
    display: block;
    width: 8rem;
    height: 8rem;
    object-fit: contain;
    margin: 0 auto 1rem auto;
    padding: 1rem;
    filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.6));
    border: 2px solid #3a2353;
    border-radius: 50%;
    background: #c18cfa;
  }

  &#summary h2 {
    font-family: "Roboto", sans-serif;
    font-size: 3rem;
    text-align: center;
    margin: 0;
    text-transform: uppercase;
    color: #3a2353;
  }

  &#summary ol {
    list-style: none;
    margin: 2rem auto;
  }

  &#summary li {
    margin: 2rem;
  }

  &#summary li h3 {
    font-family: "Roboto Condensed", sans-serif;
    font-size: 1rem;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #2c203d;
    color: #d8cde8;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }

  &#summary .question {
    margin: 0.25rem auto;
    font-size: 1rem;
    color: #30273a;
  }

  &#summary .question,
  &#summary .cssClass {
    text-align: center;
  }

  &#summary .user-answer.correct {
    color: #054e37;
    font-weight: bold;
  }

  &#summary .user-answer.wrong {
    color: #730b4b;
    font-weight: bold;
  }

  &#summary .user-anser.skipped {
    color: #d1bf2;
    font-weight: normal;
  }

  #summary-stats {
    display: flex;
    gap: 3rem;
    width: 60%;
    margin: 2rem auto;
    padding-bottom: 2rem;
    border-bottom: 2px solid #594276;

    p {
      flex: 1;
      display: flex;
      flex-direction: column;
      margin: 0;
    }
  }

  & #summary-stats .number {
    font-family: "Roboto Condensed", sans-serif;
    font-size: 3rem;
    color: #594276;
  }

  & #summary-stats .text {
    font-family: "Roboto Condensed", sans-serif;
    text-transform: uppercase;
    font-size: 0.8rem;
    color: #30273a;
    margin-top: -0.7rem;
    margin-left: 0.2rem;
    letter-spacing: 0.1rem;
  }

  @keyframes slide-in-from-bottom {
    0% {
      opacity: 0;
      transform: translateY(10%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
