import Header from "./Header";

function App() {
  return (
    <>
  <Header />
  <Main />
  <footer>
    <p className="footer">©&nbsp;2022 Mesto Russia</p>
  </footer>
  <div className="popup" id="popup-edit-profile">
    <div className="popup__container">
      <button className="popup__close" />
      <h2 className="popup__title">Редактировать профиль</h2>
      <form className="popup__form" noValidate="">
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
  <div className="popup" id="popup-card-add">
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
  <div className="popup popup_big-image" id="popup-image-big">
    <figure className="popup__image-container">
      <button className="popup__close" />
      <img className="popup__image" src="#" />
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
  <div className="popup" id="popup-avatar-edit">
    <div className="popup__container">
      <button className="popup__close" />
      <h2 className="popup__title">Обновить аватар</h2>
      <form className="popup__form" id="form-for-edit-avatar" noValidate="">
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
  <template id="card-template" />
</>

  );
}

export default App;
