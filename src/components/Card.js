import React from "react";

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="elements__item">
      <figure className="element">
        <button className="element__card-delete" type="button" />
        <img
          alt={card.name}
          src={card.link}
          onClick={handleClick}
          className="element__image"
        />
        <figcaption className="element__caption-like">
          <p className="element__caption">{card.name}</p>
          <button type="button" className="element__like" />
        </figcaption>
        <span className="element__counter-likes">{card.likes.length}</span>
      </figure>
    </li>
  );
}

export default Card;
