import React from 'react';

function PopupWithForm(props) {
  return (
    <>
      <div className={`popup popup_type_${props.name} ${props.isOpen ? "popup_is-opened" : ""}`}>
        <div className="popup__container">
          <button className="popup__close" onClick={props.onClose}/>
          <h2 className="popup__title">{props.title}</h2>
          <form className="popup__form" name={`${props.name}`} noValidate>
            {props.children}
            <button
              className="popup__button"
              type="submit">{props.buttonText}</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default PopupWithForm;
