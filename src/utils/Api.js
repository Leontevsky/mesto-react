class Api {
  constructor(config) {
    // this._config = config;
    this._url = config.url;
    this._headers = config.headers;
  }
  return;

  // проверяю результат отклика
  _handleResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка! ${res.status}`); // prom rej gjxbnfnnm
  }

  // получаю ко всем данным которые мне нужно получить
  getAllData() {
    return Promise.all([this.getUserInfo(), this.getInitialCards()]); // карточка и информация о себе
  }

  // Получить список всех карточек в виде массива (GET). Запрос на получение карточек
  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      // говорю получить карточки с урла
      method: 'GET', // задаю метод
      headers: this._headers, // передаю в запросе заголовки
    }).then((res) => {
      // далее
      return this._handleResponse(res);
    });
    //.catch(err => this._errorRequestResult(err))
  }

  // получаем аватарку и прочее
  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers,
    }).then((res) => {
      return this._handleResponse(res);
    });
  }

  editUserInfo(name, about) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then((res) => {
      return this._handleResponse(res);
    });
  }

  editUserAvatar(url) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: url,
      }),
    }).then((res) => {
      return this._handleResponse(res);
    });
  }

  addCard(name, link) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then((res) => {
      return this._handleResponse(res);
    });
  }

  deleteCard(id) {
    return fetch(`${this._url}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then((res) => {
      return this._handleResponse(res);
    });
  }

  likeCard(id) {
    return fetch(`${this._url}/cards/likes/${id}`, {
      method: 'PUT',
      headers: this._headers,
    }).then((res) => {
      return this._handleResponse(res);
    });
  }

  deleteLike(id) {
    return fetch(`${this._url}/cards/likes/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then((res) => {
      return this._handleResponse(res);
    });
  }

  changeLikeCardStatus(id, isLiked) {
    return fetch(`${this._url}/cards/likes/${id}`, {
      method: isLiked ? 'PUT' : 'DELETE',
      headers: this._headers,
    }).then((res) => {
      return res.ok ? res.json() : Promise.reject(`Ошибка! ${res.status}`);
    });
  }
}

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-24',
  headers: {
    authorization: 'eee6724a-7558-44e3-b80b-1f5173ed3e41',
    'content-type': 'application/json', // в каком виде возвращаются данные
  },
});
export default api;
