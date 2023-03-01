
function Main() {
    return (
      <>
    <main className="content">
      <section className="profile">
        <button className="profile__edit-avatar-btn" type="button">
          <img src="#" alt="Аватар." className="profile__avatar" />
        </button>
        <div className="profile__info">
          <h1 className="profile__name" />
          <button className="profile__edit-button"></button>
          <p className="profile__occupation" />
        </div>
        <button className="profile__button">
          <img
            src="./images/add-button-plus.svg"
            alt="Кнопка в виде знака плюс"
          />
        </button>
      </section>
      <section className="elements">
        <ul className="elements__list"></ul>
      </section>
    </main>
    </>
)
}
export default Main