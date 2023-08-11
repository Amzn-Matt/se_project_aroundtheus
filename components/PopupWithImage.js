import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });

    this._previewModal = document.querySelector("#preview-modal");
    this._imgPreview = this._previewModal.querySelector(
      ".modal__image-preview"
    );
    this._imgPreviewTitle = this._previewModal.querySelector(
      ".modal__image-title"
    );
  }

  open(data) {
    this._imgPreview.src = data.link;
    this._imgPreview.alt = data.name;
    this._imgPreviewTitle.textContent = data.name;
    super.open();
  }
}
