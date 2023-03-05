import React from 'react';

function Main() {
  function handleEditAvatarClick() {
    const popupEditAvatar = document.querySelector(".popup_type_avatar-edit");
    popupEditAvatar.classList.add("popup_is-opened");
  }

  function handleEditProfileClick() {
    const popupEditProfile = document.querySelector(".popup_type_edit-profile");
    popupEditProfile.classList.add("popup_is-opened");
  }

  function handleAddPlaceClick() {
    const popupAddPlace = document.querySelector(".popup_type_card-add");
    popupAddPlace.classList.add("popup_is-opened");
  }

  return (
    <>
      <main className="content">
        <section className="profile">
          <button
            onClick={handleEditAvatarClick}
            className="profile__edit-avatar-btn"
            type="button"
          >
            <img src="#" alt="Аватар." className="profile__avatar" />
          </button>
          <div className="profile__info">
            <h1 className="profile__name">Имя юзера</h1>
            <button
              onClick={handleEditProfileClick}
              className="profile__edit-button"
            ></button>
            <p className="profile__occupation" />
          </div>
          <button onClick={handleAddPlaceClick} className="profile__button">
            <img src="#" alt="Кнопка в виде знака плюс" />
          </button>
        </section>
        <section className="elements">
          <ul className="elements__list"></ul>
        </section>
      </main>
      <div className="popup popup_type_avatar-edit">
        <div className="popup__container">
          <button className="popup__close" />
          <h2 className="popup__title">Обновить аватар</h2>
          <form className="popup__form popup__form_type_avatar-edit" id="form-for-edit-avatar" noValidate="">
            <input
              id="link-avatar"
              type="url"
              className="popup__occupation link popup__input popup__input_link"
              name="link"
              placeholder="Ссылка на картинку"
              required=""
            />
            <span id="link-avatar-error" className="popup__error" />
            <input
              id="avatar-edit-submit"
              className="popup__button popup__button_disabled"
              type="submit"
              defaultValue="Сохранить"
            />
          </form>
        </div>
      </div>
      <div className="popup popup_type_edit-profile">
        <div className="popup__container">
          <button className="popup__close" />
          <h2 className="popup__title">Редактировать профиль</h2>
          <form className="popup__form popup__form_type_edit-profile" noValidate="">
            <input
              id="input-edit-profile"
              className="popup__input popup__input_name"
              name="name"
              type="text"
              placeholder="Введите ваше имя"
              minLength={2}
              maxLength={40}
              required=""
            />
            <span id="input-edit-profile-error" className="popup__error" />
            <input
              id="input-edit-occupation"
              name="info"
              type="text"
              className="popup__occupation popup__input popup__input_occupation"
              placeholder="Введите ваш род занятий"
              minLength={2}
              maxLength={200}
              required=""
            />
            <span id="input-edit-occupation-error" className="popup__error" />
            <input
              className="popup__button"
              type="submit"
              defaultValue="Сохранить"
            />
          </form>
        </div>
      </div>
      <div className="popup popup_type_card-add">
    <div className="popup__container">
      <button className="popup__close" />
      <h2 className="popup__title">Новое место</h2>
      <form className="popup__form" id="form-for-card" noValidate="">
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
        <input
          id="card-submit"
          className="popup__button popup__button_disabled"
          type="submit"
          defaultValue="Создать"
        />
      </form>
    </div>
  </div>
    </>
  );
}
export default Main;
