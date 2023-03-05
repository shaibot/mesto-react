import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose}) {
    return (
        <PopupWithForm isOpen={isOpen} onClose={onClose} name="avatar" title="Сменить аватар" buttonText="Сохранить">
            <fieldset className="popup__fieldset">
                <input className="popup__input popup__input_type_avatar-edit" name="avatar-edit" type="url"
                placeholder="Введите ссылку на изображение" required id="avatar"/>
                <span id="avatar-error" className="popup__error"></span>
            </fieldset>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;