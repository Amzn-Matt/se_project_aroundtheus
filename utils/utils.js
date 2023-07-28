function openPopup(modal) {
  modal.classList.add("modal_opened");
  modal.addEventListener("mousedown", closeModalOnRemoteClick);
  document.addEventListener("keydown", handleEscKeydown);
}

export { openPopup };
