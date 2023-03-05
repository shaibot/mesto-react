import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="body">
    <div className="page">
  <Header />
  <Main />
  <Footer />
  
  
  <div className="popup popup_big-image" id="popup-image-big">
    <figure className="popup__image-container">
      <button className="popup__close" />
      <img className="popup__image" src="#" alt=""/>
      <figcaption className="popup__image-caption" />
    </figure>
  </div>
  <div className="popup" id="popup-card-delete">
    <div className="popup__container">
      <button className="popup__close" />
      <h2 className="popup__title">Вы уверены?</h2>
      <form className="popup__form" id="form-for-delete">
        <button id="card-submit-delete" className="popup__button" type="submit">
          Да
        </button>
      </form>
    </div>
  </div>
  
  </div>
  <template id="card-template" />
  </div>

  );
}

export default App;
