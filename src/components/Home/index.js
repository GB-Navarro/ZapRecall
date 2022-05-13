import React from 'react';
import "./css/style.css";
export default function Home() {
  let [screen1Status, setScreen1Status] = React.useState(false);
  let deckType = ""; //Variável que vai armazenar o tipo de deck escolhido
  return (
    <main className="screen1">
      <div className="homeBox">
        <img className="homeImage" src="./assets/img/logo.png" alt="logo" />
        <p className="homeImageText">ZapRecall</p>
      </div>
      <form>
        <div className="decks">
          <label htmlFor="deck">Escolha o seu deck</label>
          <select name="deck" onChange={(e) => {
              console.log(e.target.value);
            }}>
            <option value="React">React</option>
            <option value="Narutin">Narutin</option>
          </select>
        </div>
      </form>
      <form>
        <div className="zapGoals">
          <label htmlFor="goal">Qual é a sua meta de zaps?</label>
          <input type="text" name="goal">
          </input>
        </div>
      </form>
      <button className="startRecall" onClick={() => {
          setScreen1Status(true);
          validateScreen1Status();
          console.log(deckType);
        }}>Iniciar Recall!</button>
    </main>
  );
  function validateScreen1Status() {
    if (screen1Status === true) {
      document.querySelector(".screen1").classList.add("hide");
      document.querySelector(".screen2").classList.remove("hide");
    }
  }
}
