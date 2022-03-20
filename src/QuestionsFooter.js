export default function QuestionsFooter(){
    let contador = 0;
    const numberOfQuestions = 8;
    return (
        <footer className="questionsFooter">
            <div className="conclusionStatus"></div>
            <div className="conclusionMessages">
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
                <p> {contador}/{numberOfQuestions} CONCLUÍDOS </p>
            </div>
        </footer>
    )
}