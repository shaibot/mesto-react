import React, { useEffect, useState } from 'react';
import { api } from '../utils/api';
import Card from './Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
const [userName, setUserName] = useState("")
const [userDescription, setuserDescription] = useState("")
const [userAvatar, setUserAvatar] = useState("")
const [cards, setCards] = useState([])

useEffect(() => {
  Promise.all([api.getInfo(), api.getInitialCards()])
  .then(([userData, cardsData]) => {
    setUserName(userData.name);
    setuserDescription(userData.about);
    setUserAvatar(userData.avatar);
    setCards(cardsData)
  })
  .catch((error) => {
    console.log(error)
  })
}, [])

  

  return (
    <>
      <main className="content">
        <section className="profile">
          <button
            onClick={onEditAvatar}
            className="profile__edit-avatar-btn"
            type="button"
          >
            <img src={`${userAvatar}`} alt="Аватар." className="profile__avatar" />
          </button>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button
            type='button'
              onClick={onEditProfile}
              className="profile__edit-button"
            ></button>
            <p className="profile__occupation">{userDescription}</p>
          </div>
          <button onClick={onAddPlace} className="profile__button"/>
        </section>
        <section className="elements">
          <ul className="elements__list">
{cards.map((card) => {
  return (
    <Card
    key={card._id}
    card={card}
    link={card.link}
    name={card.name}
    onCardClick={onCardClick}
    />
  )
})}
          </ul>
        </section>
      </main>
      {/* <div className="popup popup_type_avatar-edit">
        <div className="popup__container">
          <button className="popup__close" />
          <h2 className="popup__title">Обновить аватар</h2>
          <form className="popup__form popup__form_type_avatar-edit" name="avatar-edit" id="form-for-edit-avatar" noValidate="">
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
          <form className="popup__form popup__form_type_edit-profile" name="edit-profile" noValidate="">
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
      <form className="popup__form" name="card-add" noValidate="">
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
  <div className="popup popup_type_card-delete">
    <div className="popup__container">
      <button className="popup__close" />
      <h2 className="popup__title">Вы уверены?</h2>
      <form className="popup__form" name="card-delete" id="form-for-delete">
        <button id="card-submit-delete" className="popup__button" type="submit">
          Да
        </button>
      </form>
    </div>
  </div> */}
    </>
  );
}
export default Main;
