import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, loadingButtonText, buttonText) {
    super({ popupSelector });
    this._loadingButtonText = loadingButtonText;
    this._buttonText = buttonText;
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._confirmButton = this._popupForm.querySelector(".modal__form-button");
  }

  setEventListeners() {
    super.setEventListeners();

    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleConfirmSubmit();
    });
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._confirmButton.textContent = this._buttonText;
    } else {
      this._confirmButton.textContent = this._loadingButtonText;
    }
  }

  setSubmitAction(action) {
    this._handleConfirmSubmit = action;
  }
}
