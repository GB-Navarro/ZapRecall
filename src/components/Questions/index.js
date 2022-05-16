import React from 'react';
import "./css/style.css";
import Footer from './Footer'
import useSound from "use-sound";
import acertou from "./assets/audio/acertou.mp3";
import naosei from "./assets/audio/naosei.mp3";
import errou from "./assets/audio/errou.mp3";


const REACTQUESTIONS = [
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

const NARUTOQUESTIONS = [
  {
    question: "Como a akatsuki armazenava os arquivos dos jinchuurikis que eles capturavam ?",
    answer: "No Pain-drive",
    id: 1
  },
  {
    question: "Qual é a personagem de naruto favorita do Compadre Washington ?",
    answer: "É a Ino (Sabe de nada Ino-cente)",
    id: 2
  },
  {
    question: "Qual é o ninja que sempre tá dando um espetáculo ?",
    answer: "É o Show-ji",
    id: 3
  },
  {
    question: "Qual é o cha que o kakashi nunca encontra pra tomar ?",
    answer: "É o Chá-kra",
    id: 4
  },
  {
    question: "Porque o sharingan é vermelho ?",
    answer: "É pra ver-melhor",
    id: 5
  },
  {
    question: "Quando o Tobi se machuca, quem cuida dele ?",
    answer: "É o SARU-Tobi",
    id: 6
  },
  {
    question: "Quem é o ninja que mais curte um heavy metal ?",
    answer: "É o ROCK-lee",
    id: 7
  },
  {
    question: "Qual é a ninja médica que tem cura até no nome ?",
    answer: "É a Sa-KURA Haruno",
    id: 8
  }
];

const SCRAMBLEDREACTQUESTIONS = shuffleArray(REACTQUESTIONS);
const SCRAMBLEDNARUTOQUESTIONS = shuffleArray(NARUTOQUESTIONS)

export default function Questions(props) {

  const [count, setCount] = React.useState(0);
  const [iconsArray, setIconsArray] = React.useState([]);
  /* const [teste, setTeste] = React.useState(""); XABU (Too many renders)*/

  const numberOfQuestions = 8;

  return (
    <>
      <section className="screen2 hide">
        <header className="questionsHeader">
          <div className="questionsHeaderLogo">
            <img src="./assets/img/logo-pequeno.png" className="questionsHeaderImg" alt="logo pequeno" />
          </div>
          <div className="questionsHeaderText"><b>ZapRecall</b></div>
        </header>
        <main className="questions">
          {props.deckType === "React" ? 
          SCRAMBLEDREACTQUESTIONS.map((question, index) => {
            return (
              <Question key={question.id} question={question.question} answer={question.answer}
                completed={count} setCompleted={setCount} index={index} iconsArray ={iconsArray}
                setIconsArray={setIconsArray}/>
            );
          })
          :
          SCRAMBLEDNARUTOQUESTIONS.map((question, index) => {
            return (
              <Question key={question.id} question={question.question} answer={question.answer}
                completed={count} setCompleted={setCount} index={index} iconsArray ={iconsArray}
                setIconsArray={setIconsArray}/>
            );
          })
          }
          {}
        </main>
        <Footer count={count} numberOfQuestions={numberOfQuestions}>
          <p> {count}/{numberOfQuestions} CONCLUÍDOS </p>
          {
            iconsArray.map((icon) => {
              if(icon === "check"){
                return(
                  <>
                    <span className="hitIcon checkColor"><ion-icon name="checkmark-circle-sharp"></ion-icon></span>
                  </>
                )
              }else if(icon === "doubt"){
                return(
                  <>
                    <span className="doubtIcon doubtColor"><ion-icon name="help-circle-sharp"></ion-icon></span>
                  </>
                )
              }else if(icon === "error"){
                return(
                  <>
                    <span className="errorIcon errorColor"><ion-icon name="close-circle-sharp"></ion-icon></span>
                  </>
                )
              }else{
                return(
                  <></>
                )
              }
            })
          }
          {
            count === numberOfQuestions ? (verifyGoal(props.zapsGoal) === true ? alert("Você cumpriu a sua meta") : alert("Você não cumpriu a sua meta")) : <></>
          }
          {/*{teste}
          {
            count === numberOfQuestions ? setTeste(<h1> Olá mundo </h1>) : <></>
          } XABU */}

        </Footer>
      </section>
    </>

  );
  
  function zapsCheck(iconsArray){
    let zaps = 0;
    for(let i = 0; i < iconsArray.length; i++){
      if(iconsArray[i] === "check"){
        zaps = zaps + 1;
      }
    }
    return zaps;
  }

  function verifyGoal(goal){
    let zaps = zapsCheck(iconsArray);
    if(zaps >= parseInt(goal)){
      return true;
    }else{
      return false;
    }
    
  }
}

function Question(props) {
  const [stage, setStage] = React.useState("stage1");
  const [status, setStatus] = React.useState("");
  
  const [checkPlay] = useSound(acertou);
  const [doubtPlay] = useSound(naosei);
  const [errorPlay] = useSound(errou);

  if (stage === "stage1") {
    return (
      <>
        <div className="questions">
          <div className="questionStage1" onClick={() => {
            setStage("stage2")
          }}>
            <p>Pergunta {(props.index + 1)}</p>
            <span className="arrowIcon"><ion-icon name="play-outline"></ion-icon></span>
          </div>
        </div>
      </>
    )
  } else if (stage === "stage2") {
    return (
      <>
        <div className="questions">
          <div className="questionStage2">
            <div className="questionTittle">
              {props.question}
            </div>
            <div className="container">
              <div className="box">
                <img src="./assets/img/setinha.png" alt="ícone" onClick={() => {
                  setStage("stage3")
                }} />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  } else if (stage === "stage3") {
    return (
      <>
        <div className="questions">
          <div className="questionStage3">
            {props.answer}
            <div className="status">
              <div className="dontRemember" onClick={() => {
                setStage("stage4");
                setStatus("error");
                props.setIconsArray([...props.iconsArray, "error"]);
                errorPlay()
                props.setCompleted(props.completed + 1);
              }}> Não lembrei</div>
              <div className="almostDontRemember" onClick={() => {
                setStage("stage4");
                setStatus("doubt");
                props.setIconsArray([...props.iconsArray, "doubt"]);
                doubtPlay()
                props.setCompleted(props.completed + 1);
              }}> Quase não lembrei</div>
              <div className="zap" onClick={() => {
                setStage("stage4");
                setStatus("check");
                props.setIconsArray([...props.iconsArray, "check"]);
                checkPlay()
                props.setCompleted(props.completed + 1);
              }}> Zap! </div>
            </div>
          </div>
        </div>
      </>
    )
  } else if (stage === "stage4") {
    return (
      <>
        <div className="questions">
          <div className="questionStage4">
            <p className={status === "check" ? "checkColor" : "hide"}>Pergunta</p>
            <p className={status === "doubt" ? "doubtColor" : "hide"}>Pergunta</p>
            <p className={status === "error" ? "errorColor" : "hide"}>Pergunta</p>
            <span className={status === "check" ? "hitIcon checkColor" : "hitIcon hide "}><ion-icon name="checkmark-circle-sharp"></ion-icon></span>
            <span className={status === "doubt" ? "doubtIcon doubtColor" : "doubtIcon hide"}><ion-icon name="help-circle-sharp"></ion-icon></span>
            <span className={status === "error" ? "errorIcon errorColor" : "errorIcon hide"}><ion-icon name="close-circle-sharp"></ion-icon></span>
          </div>
        </div>
      </>
    )
  } else {
    return <></>
  }
}

function shuffleArray(arr) {
  for (let i = (arr.length - 1); i > 0; i--) {
    const randomNumber = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[randomNumber]] = [arr[randomNumber], arr[i]];
  }
  return arr;
}