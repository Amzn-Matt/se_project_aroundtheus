export default class Card {
  constructor(
    { name, link, likes, _id, owner },
    cardSelector,
    handleCardClick,
    handleDeleteBtnClick,
    userId
  ) {
    this._name = name;
    this._link = link;
    this._likes = likes;
    this._cardId = _id;
    this._owner = owner._id;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteBtnClick = handleDeleteBtnClick;
    this._userId = userId;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleLikeBtn();
    });

    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteBtnClick(this._cardId);
    });

    this._cardImageElement.addEventListener("click", () => {
      this._handleCardClick({ name: this._name, link: this._link });
    });
  }

  _handleLikeBtn() {
    this._likeButton.classList.toggle("card__like-button_active");
  }

  removeCard() {
    this._cardElement.remove();
  }

  generateCard() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    this._likeButton = this._cardElement.querySelector(".card__like-button");
    this._deleteButton = this._cardElement.querySelector(
      ".card__delete-button"
    );

    this._cardImageElement = this._cardElement.querySelector(".card__image");
    this._cardTitleElement = this._cardElement.querySelector(".card__title");
    this._cardTitleElement.textContent = this._name;
    this._cardImageElement.src = this._link;
    this._cardImageElement.alt = this._link;

    this._setEventListeners();

    return this._cardElement;
  }
}
