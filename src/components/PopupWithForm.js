import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._inputValues =
      this._popupElement.querySelectorAll(".modal__form-input");
    this._submitButton = this._popupForm.querySelector(".modal__form-button");
  }

  _getInputValues() {
    const formInputValue = {};
    this._inputValues.forEach((input) => {
      formInputValue[input.name] = input.value;
    });
    return formInputValue;
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._submitButton.textContent = "Saving...";
    } else {
      this._submitButton.textContent = "Save";
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }
  close() {
    super.close();
    this._popupForm.reset();
  }
}
