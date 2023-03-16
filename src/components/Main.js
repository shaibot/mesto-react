import React, { useEffect, useState } from "react";
import api from "../utils/api";
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setuserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([user, cardsData]) => {
        setUserName(user.name);
        setuserDescription(user.about);
        setUserAvatar(user.avatar);
        setCards(cardsData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <main className="content">
        <section className="profile">
          <button
            onClick={onEditAvatar}
            className="profile__edit-avatar-btn"
            type="button"
          >
            <div
              style={{ backgroundImage: `url(${userAvatar})` }}
              className="profile__avatar"
            ></div>
          </button>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button
              type="button"
              onClick={onEditProfile}
              className="profile__edit-button"
            ></button>
            <p className="profile__occupation">{userDescription}</p>
          </div>
          <button onClick={onAddPlace} className="profile__button" />
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
              );
            })}
          </ul>
        </section>
      </main>
    </>
  );
}
export default Main;
