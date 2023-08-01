import Card from "../components/Card.js";
import { openPopup, closePopup } from "../utils/utils.js";
import FormValidator from "../components/FormValidator.js";

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
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const profileModalForm = profileModal.querySelector("#profile-edit-form");

//Add Card Variables
const addNewCardBtn = document.querySelector(".profile__add-button");
const addNewCardModal = document.querySelector("#add-modal");
const addCardModalForm = addNewCardModal.querySelector("#add-card-form");
const cardTitleInput = addCardModalForm.querySelector("#add-card-title-input");
const cardUrlInput = addCardModalForm.querySelector("#add-card-url-input");
const cardListElement = document.querySelector(".cards__list");

// Validation Config
const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__form-input",
  submitButtonSelector: ".modal__form-button",
  inactiveButtonClass: "modal__form-button_disabled",
  inputErrorClass: "modal__form-input_type_error",
  errorClass: "modal__error_visible",
};

//Functions
function fillProfileForm() {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
}

function openEditProfileForm() {
  fillProfileForm();
  profileFormValidator.resetValidation();
  openPopup(profileModal);
}

function openAddNewCardModal() {
  addCardFormValidator.resetValidation();
  openPopup(addNewCardModal);
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

function createCard(data) {
  const cardElement = new Card(data, "#card-template");
  return cardElement.generateCard();
}

function renderCard(data) {
  const cardElement = createCard(data);
  cardListElement.prepend(cardElement);
}

//Loops
initialCards.forEach(renderCard);

//Event Listeners
profileEditBtn.addEventListener("click", openEditProfileForm);

addNewCardBtn.addEventListener("click", openAddNewCardModal);

profileModalForm.addEventListener("submit", handleProfileFormSubmit);

addCardModalForm.addEventListener("submit", handleNewCardSubmit);

//Form Validation
const profileFormValidator = new FormValidator(config, profileModalForm);
const addCardFormValidator = new FormValidator(config, addCardModalForm);

profileFormValidator.enableValidation();
addCardFormValidator.enableValidation();
