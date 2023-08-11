export default class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;

    this._previewModal = document.querySelector("#preview-modal");
    this._imgPreview = this._previewModal.querySelector(
      ".modal__image-preview"
    );
    this._imgPreviewTitle = this._previewModal.querySelector(
      ".modal__image-title"
    );
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleLikeBtn();
    });

    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteBtn();
    });

    this._cardImageElement.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  _handleLikeBtn() {
    this._likeButton.classList.toggle("card__like-button_active");
  }

  _handleDeleteBtn() {
    this._cardElement.remove();
  }

  // _handleCardClick() {
  //   this._imgPreview.src = this._link;
  //   this._imgPreview.alt = this._link;
  //   this._imgPreviewTitle.textContent = this._name;
  // }

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
