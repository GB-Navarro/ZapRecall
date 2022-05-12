import React from 'react';
import "./css/style.css";
export default function Home() {
    let [screen1Status, setScreen1Status] = React.useState(false);
    return (
      <main className="screen1">
        <div className="homeBox">
          <img className="homeImage" src="./assets/img/logo.png" alt="logo" />
          <p className="homeImageText">ZapRecall</p>
        </div>
  
        <button className="startRecall" onClick={() => {
          setScreen1Status(true);
          validateScreen1Status();
        }}>Iniciar Recall!</button>
      </main>
    );
    function validateScreen1Status(){
      if(screen1Status === true){
        document.querySelector(".screen1").classList.add("hide");
        document.querySelector(".screen2").classList.remove("hide");
      }
    }

  }
  