class Api {
    constructor({ baseUrl, headers }) {
        this._url = baseUrl
        this._headers = headers
    }

    _addResult(res) {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    }

    // Получение карточек
    getInitialCards() {
        return fetch(`${this._url}/cards`, {
            method: 'GET',
            headers: this._headers,
        }).then((res) => this._addResult(res))
    }

    // Добавить новую карточку
    addNewCard(name, link) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',

            headers: this._headers,

            body: JSON.stringify({
                name: name,
                link: link,
            }),
        }).then((res) => this._addResult(res))
    }

    // Удалить карточку
    deleteCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers,
        }).then((res) => this._addResult(res))
    }

    // Лайки
    addLike(id) {
        return fetch(`${this._url}/cards/${id}/likes/`, {
            method: 'PUT',
            headers: this._headers,
        }).then((res) => this._addResult(res))
    }

    // Удалить лайки
    deleteLike(id) {
        return fetch(`${this._url}/cards/${id}/likes/`, {
            method: 'DELETE',
            headers: this._headers,
        }).then((res) => this._addResult(res))
    }

    // Получeние данных юзера
    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: this._headers,
        }).then((res) => this._addResult(res))
    }

    // Редакт информации юзера
    editUserInfo(name, info) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                about: info,
            }),
        }).then((res) => this._addResult(res))
    }

    // Редакт аватара
    editUserAvatar(url) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: url,
            }),
        }).then((res) => this._addResult(res))
    }

    changeLikeCardStatus(id, isLiked) {
        if (isLiked) {
          return this._request(`${this._url}/cards/${id}/likes`, {
            headers: this._headers,
              method: "PUT",
          });
        } else {
          return this._request(`${this._url}/cards/${id}/likes`, {
            headers: this._headers,
            method: "DELETE",
          });
        }
      }


}

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-59',
    headers: {
        authorization: '828326d9-3e7a-4e87-bb3e-57d75ba5d596',
        'Content-Type': 'application/json',
    }
})

export default api;


class Api {
    constructor(options) {
      this._options = options;
      this._baseUrl = this._options.baseUrl;
      this._headers = this._options.headers;
    }
    
    _checkResponse(response) {
      if (response.ok) {
        return response.json();
      }
        return Promise.reject(response);
      }
    
    _request(url, options) {
      return fetch(url, options).then(this._checkResponse)
    }
    
    getInfo() {
      return this._request(`${this._baseUrl}/users/me`, {
        headers: this._headers,
      });
    }
    
    getInitialCards() {
      return this._request(`${this._baseUrl}/cards`, {
        headers: this._headers,
      });
    }
    
    addInfo(data) {
      return this._request(`${this._baseUrl}/users/me`, {
        headers: this._headers,
        method: "PATCH",
        body: JSON.stringify({
          name: `${data.name}`,
          about: `${data.about}`,
        }),
      });
    }
    
    createCard(data) {
      return this._request(`${this._baseUrl}/cards`, {
        headers: this._headers,
        method: "POST",
        body: JSON.stringify({
          name: data.title,
          link: data.link,
        }),
      });
    }
    
    changeLikeCardStatus(id, isLiked) {
      if (isLiked) {
        return this._request(`${this._baseUrl}/cards/${id}/likes`, {
          headers: this._headers,
            method: "PUT",
        });
      } else {
        return this._request(`${this._baseUrl}/cards/${id}/likes`, {
          headers: this._headers,
          method: "DELETE",
        });
      }
    }
    
    deleteCard(id) {
      return this._request(`${this._baseUrl}/cards/${id}`, {
        headers: this._headers,
        method: "DELETE",
      });
    }
    
    addAvatar(data) {
      return this._request(`${this._baseUrl}/users/me/avatar`, {
        headers: this._headers,
        method: "PATCH",
        body: JSON.stringify({
          avatar: data.avatar,
        }),
      });
    }
  }
  
  const api = new Api({
    baseUrl: "https://mesto.nomoreparties.co/v1/cohort-59",
    headers: {
      authorization: "7b9e1f3e-ea14-4843-8c77-09b44113828b",
      "Content-Type": "application/json",
    },
  });
  
  export default api;