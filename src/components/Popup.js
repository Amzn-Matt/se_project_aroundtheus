export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keydown", (evt) => {
      this._handleEscClose(evt);
    });
  }

  close() {
    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("keydown", (evt) => {
      this._handleEscClose(evt);
    });
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  _closeOnRemoteClick(evt) {
    if (
      evt.target === evt.currentTarget ||
      evt.target.classList.contains("modal__close")
    ) {
      this.close();
    }
  }

  setEventListeners() {
    this._popupElement.addEventListener("mousedown", (evt) => {
      this._closeOnRemoteClick(evt);
    });
  }
}
