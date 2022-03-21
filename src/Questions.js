import React from 'react';
import QuestionsFooter from './QuestionsFooter'

const QUESTIONSARRAY = [
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

export default function Questions() {    
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
                {QUESTIONSARRAY.map((question) => {
                    return (
                        <Question key={question.id} question={question.question} answer={question.answer}/>
                    );
                })}
            </main>
            <QuestionsFooter />
          </section>
        </>
      
    );
  }
  
  function Question(props){

    let [questionState1, setQuestionState] = React.useState(false);

    return (
      <>
        <div className="question">
          <div className="questionStage1" onClick={() => {
            setQuestionState(true);
            validateQuestionState(questionState1);
          }}>
            <p>Pergunta</p>
            <span className="arrowIcon"><ion-icon name="play-outline"></ion-icon></span>
            <span className="hitIcon hide"><ion-icon name="checkmark-circle-sharp"></ion-icon></span>
            <span className="doubtIcon hide"><ion-icon name="help-circle-sharp"></ion-icon></span>
            <span className="errorIcon hide"><ion-icon name="close-circle-sharp"></ion-icon></span>
          </div>
          <div className="questionStage2 hide">
            <div className="questionTittle">
              {props.question}
            </div>
            <div className="answerArrow">
              <img src="./assets/img/setinha.png" onClick={console.log("salve")} />
            </div>
          </div>
          <div className="questionStage3 hide">
            {props.answer}
            <div className="status container">
              <div className="dontRemember"> Não lembrei</div>
              <div className="almostDontRemember"> Quase não lembrei</div>
              <div className="zap"> Zap! </div>
            </div>
          </div>
                                
        </div>
      </>
    );
  }

  function validateQuestionState(questionState1){
    if(questionState1 === true){
      document.querySelector(".questionStage1").classList.add("hide");
      document.querySelector(".questionStage2").classList.remove("hide");
    }
  }
