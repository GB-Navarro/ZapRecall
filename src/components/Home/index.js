import React from 'react';
import "./css/style.css";
export default function Home(props) {
  const [screen1Status, setScreen1Status] = React.useState(false);

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
              props.setDeckType(e.target.value);
              console.log(props.deckType)
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
