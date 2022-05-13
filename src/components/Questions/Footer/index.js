import "./css/style.css";
import React from "react";

export default function Footer(props){
    const numberOfQuestions = 8;
    return (
        <footer className="questionsFooter">
            <div className="conclusionStatus"></div>
            <div className="conclusionMessages hide">
                <div className="message1 hide">
                    <p><b> 🤩 Parabéns! </b></p>
                    <p>Você não esqueceu nenhum flashcard!</p>
                </div>
                <div className="message2 hide">
                    <p><b> 🙄 Putz... </b></p>
                    <p> Ainda faltam alguns...
                        <br/>  
                    </p>
                </div>
            </div>
            <div className="conclusionNumbers">
                <p> {props.completed}/{numberOfQuestions} CONCLUÍDOS </p>
            </div>
            <div className="conclusionIcons">
                {props.children}
            </div>
        </footer>
    )
}