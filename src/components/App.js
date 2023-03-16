import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import ImagePopup from "./ImagePopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen("popup_is-opened");
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen("popup_is-opened");
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen("popup_is-opened");
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeAllPopups = () => {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setSelectedCard({});
  };

  return (
    <div className="body">
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        />
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
