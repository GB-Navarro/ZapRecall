import React from 'react';
import "./css/style.css";
import Footer from './Footer'
import useSound from "use-sound";
import acertou from "./assets/audio/acertou.mp3";
import naosei from "./assets/audio/naosei.mp3";
import errou from "./assets/audio/errou.mp3";

const QUESTIONS = [
  {
    question: "O que é JSX?",
    answer: "Uma extensão de linguagem do JavaScript",
    id: 1
  },
  {
    question: "O React é __",
    answer: "uma biblioteca JavaScript para construção de interfaces",
    id: 2
  },
  {
    question: "Componentes devem iniciar com __",
    answer: "letra maiúscula",
    id: 3
  },
  {
    question: "Podemos colocar __ dentro do JSX",
    answer: "expressões",
    id: 4
  },
  {
    question: "O ReactDOM nos ajuda __",
    answer: "interagindo com a DOM para colocar componentes React na mesma",
    id: 5
  },
  {
    question: "Usamos o npm para __ ",
    answer: "gerenciar os pacotes necessários e suas dependências",
    id: 6
  },
  {
    question: "Usamos props para __",
    answer: "passar diferentes informações para componentes",
    id: 7
  },
  {
    question: "Usamos estado (state) para __ ",
    answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    id: 8
  }
];

const SCRAMBLEDQUESTIONS = shuffleArray(QUESTIONS);

export default function Questions() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <section className="screen2 hide">
        <header className="questionsHeader">
          <div className="questionsHeaderLogo">
            <img src="./assets/img/logo-pequeno.png" alt="logo pequeno" />
          </div>
          <div className="questionsHeaderText"><b>ZapRecall</b></div>
        </header>
        <main className="questions">
          {SCRAMBLEDQUESTIONS.map((question, index) => {
            return (
              <Question key={question.id} question={question.question} answer={question.answer} completed={count} setCompleted={setCount} index={index}/>
            );
          })}
        </main>
        <Footer completed={count}/>
      </section>
    </>

  );
}

function Question(props) {

  const [stage1, setStage1] = React.useState(true);
  const [stage2, setStage2] = React.useState(false);
  const [stage3, setStage3] = React.useState(false);
  const [stage4, setStage4] = React.useState(false);
  const [check, setCheck] = React.useState(false);
  const [doubt, setDoubt] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [checkPlay] = useSound(acertou);
  const [doubtPlay] = useSound(naosei);
  const [errorPlay] = useSound(errou);

  return (
    <>
      <div className="questions">
        <div className={stage1 === true ? "questionStage1" : "questionStage1 hide"} onClick={() => {
          setStage1(false)
          setStage2(true)
        }}>
          <p>Pergunta {(props.index + 1)}</p>
          <span className="arrowIcon"><ion-icon name="play-outline"></ion-icon></span>
        </div>
        <div className={stage2 === false ? "questionStage2 hide" : "questionStage2"} >
          <div className="questionTittle">
            {props.question}
          </div>
          <div className="container">
            <div className="box">
              <img src="./assets/img/setinha.png" alt="ícone" onClick={() => {
                setStage2(false)
                setStage3(true)
              }} />
            </div>
          </div>
        </div>
        <div className={stage3 === false ? "questionStage3 hide" : "questionStage3"}>
          {props.answer}
          <div className="status">
            <div className="dontRemember" onClick={() => {
              setStage3(false);
              setStage4(true);
              setError(true);
              errorPlay();
              props.setCompleted(props.completed + 1);
            }}> Não lembrei</div>
            <div className="almostDontRemember" onClick={() => {
              setStage3(false);
              setStage4(true);
              setDoubt(true);
              doubtPlay();
              props.setCompleted(props.completed + 1);
            }}> Quase não lembrei</div>
            <div className="zap" onClick={() => {
              setStage3(false);
              setStage4(true);
              setCheck(true);
              checkPlay();
              props.setCompleted(props.completed + 1);
            }}> Zap! </div>
          </div>
        </div>
        <div className={stage4 === false ? "questionStage4 hide" : "questionStage4"}>
          <p className={check === false ? "hide" : "checkColor"}>Pergunta</p>
          <p className={doubt === false ? "hide" : "doubtColor"}>Pergunta</p>
          <p className={error === false ? "hide" : "errorColor"}>Pergunta</p>
          <span className={check === false ? "hitIcon hide " : "hitIcon checkColor"}><ion-icon name="checkmark-circle-sharp"></ion-icon></span>
          <span className={doubt === false ? "doubtIcon hide" : "doubtIcon doubtColor"}><ion-icon name="help-circle-sharp"></ion-icon></span>
          <span className={error === false ? "errorIcon hide" : "errorIcon errorColor"}><ion-icon name="close-circle-sharp"></ion-icon></span>
        </div>

      </div>
    </>
  );
}

function shuffleArray(arr){
  for(let i = (arr.length - 1); i > 0; i --){
    const randomNumber = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[randomNumber]] = [arr[randomNumber], arr[i]];
  }
  return arr;
}
