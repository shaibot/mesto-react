import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name="card-add"
      title="Новое место"
      buttonText="Создать"
    >
      <input
        className="name popup__input popup__input_name"
        id="name-card"
        name="name"
        type="text"
        placeholder="Название"
        minLength={2}
        maxLength={30}
        required=""
      />
      <span id="name-card-error" className="popup__error" />
      <input
        id="link"
        type="url"
        className="popup__occupation link popup__input"
        name="link"
        placeholder="Ссылка на картинку"
        required=""
      />
      <span id="link-error" className="popup__error" />
    </PopupWithForm>
  );
}

export default AddPlacePopup;
