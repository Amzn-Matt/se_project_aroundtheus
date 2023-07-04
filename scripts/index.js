const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },

  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },

  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },

  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },

  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },

  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

//Profile Variables
const profileModal = document.querySelector("#edit-modal");
const profileEditBtn = document.querySelector(".profile__edit-button");
const profileModalCloseBtn = profileModal.querySelector(".modal__close");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#name");
const profileDescriptionInput = document.querySelector("#description");
const profileModalForm = profileModal.querySelector("#profile-edit-form");

//Add Card Variables
const addNewCardBtn = document.querySelector(".profile__add-button");
const addNewCardModal = document.querySelector("#add-modal");
const addNewCardModalCloseBtn = addNewCardModal.querySelector(".modal__close");
const addCardModalForm = addNewCardModal.querySelector("#add-card-form");
const cardTitleInput = addCardModalForm.querySelector("#title");
const cardUrlInput = addCardModalForm.querySelector("#url");

//Card DOM Template
const cardTemplate = document.querySelector("#card-template").content;
const cardListElement = document.querySelector(".cards__list");

//Image Preview Variables
const previewModal = document.querySelector("#preview-modal");
const imgPreview = previewModal.querySelector(".modal__image-preview");
const imgPreviewTitle = previewModal.querySelector(".modal__image-title");
const imgCloseBtn = previewModal.querySelector(".modal__close");

//Functions
function openPopup(modal) {
  modal.classList.add("modal_opened");
}

function closePopup(modal) {
  modal.classList.remove("modal_opened");
}

function fillProfileForm() {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
}

function openEditProfileForm() {
  fillProfileForm();
  openPopup(profileModal);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(profileModal);
}

function handleNewCardSubmit(evt) {
  evt.preventDefault();

  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ name, link });
  closePopup(addNewCardModal);

  addCardModalForm.reset();
}

function getCardElement(data) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImageElement = cardElement.querySelector(".card__image");
  const cardTitleElement = cardElement.querySelector(".card__title");
  const cardLikeBtn = cardElement.querySelector(".card__like-button");
  const cardDeleteBtn = cardElement.querySelector(".card__delete-button");

  cardLikeBtn.addEventListener("click", () => {
    cardLikeBtn.classList.toggle("card__like-button_active");
  });

  cardDeleteBtn.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImageElement.addEventListener("click", () => {
    imgPreview.src = data.link;
    imgPreview.alt = data.name;
    imgPreviewTitle.textContent = data.name;
    openPopup(previewModal);
  });

  cardTitleElement.textContent = data.name;
  cardImageElement.alt = data.name;
  cardImageElement.src = data.link;

  return cardElement;
}

function renderCard(data) {
  const cardElement = getCardElement(data);
  cardListElement.prepend(cardElement);
}

//Loops
initialCards.forEach((data) => {
  renderCard(data);
});

//Event Listeners
profileEditBtn.addEventListener("click", openEditProfileForm);

profileModalCloseBtn.addEventListener("click", () => closePopup(profileModal));

addNewCardBtn.addEventListener("click", () => openPopup(addNewCardModal));

addNewCardModalCloseBtn.addEventListener("click", () =>
  closePopup(addNewCardModal)
);

imgCloseBtn.addEventListener("click", () => closePopup(previewModal));

profileModalForm.addEventListener("submit", handleProfileFormSubmit);

addCardModalForm.addEventListener("submit", handleNewCardSubmit);
