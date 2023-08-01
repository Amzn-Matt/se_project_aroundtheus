function openPopup(modal) {
  modal.classList.add("modal_opened");
  modal.addEventListener("mousedown", closeModalOnRemoteClick);
  document.addEventListener("keydown", handleEscKeydown);
}

function closePopup(modal) {
  modal.classList.remove("modal_opened");
  modal.removeEventListener("mousedown", closeModalOnRemoteClick);
  document.removeEventListener("keydown", handleEscKeydown);
}

function handleEscKeydown(evt) {
  if (evt.key === "Escape") {
    const openedModal = document.querySelector(".modal_opened");
    closePopup(openedModal);
  }
}

function closeModalOnRemoteClick(evt) {
  if (
    evt.target === evt.currentTarget ||
    evt.target.classList.contains("modal__close")
  ) {
    closePopup(evt.currentTarget);
  }
}

export { openPopup, closePopup };
