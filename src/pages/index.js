import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import "../pages/index.css";

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
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const profileModalForm = profileModal.querySelector("#profile-edit-form");

//Add Card Variables
const addNewCardBtn = document.querySelector(".profile__add-button");
const addNewCardModal = document.querySelector("#add-modal");
const addCardModalForm = addNewCardModal.querySelector("#add-card-form");
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
//Card Section
const section = new Section(
  {
    items: initialCards,
    renderer: (data) => {
      const cardElement = createCard(data);
      section.addItem(cardElement);
    },
  },
  cardListElement
);

section.renderItems();

//Profile Form
const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  jobSelector: ".profile__description",
});

const profileEditPopup = new PopupWithForm(
  "#edit-modal",
  handleProfileFormSubmit
);
profileEditPopup.setEventListeners();

//Add Card Form
const addCardPopup = new PopupWithForm("#add-modal", handleNewCardSubmit);
addCardPopup.setEventListeners();

const cardPreviewPopup = new PopupWithImage("#preview-modal");
cardPreviewPopup.setEventListeners();

//Functions
function openEditProfileForm() {
  const userData = userInfo.getUserInfo();
  profileTitleInput.value = userData.userName;
  profileDescriptionInput.value = userData.userJob;
  profileFormValidator.resetValidation();
  profileEditPopup.open();
}

function openAddNewCardModal() {
  addCardFormValidator.resetValidation();
  addCardPopup.open();
}

function handleProfileFormSubmit(inputValues) {
  userInfo.setUserInfo(inputValues);
  profileEditPopup.close();
}

function handleNewCardSubmit(inputValues) {
  const { name, link } = inputValues;
  const newCardEl = createCard({ name, link });
  section.addItem(newCardEl);
  addCardPopup.close();
}

function createCard(data) {
  const cardElement = new Card(data, "#card-template", handleCardClick);
  return cardElement.generateCard();
}

function handleCardClick(data) {
  cardPreviewPopup.open(data);
}

//Event Listeners
profileEditBtn.addEventListener("click", openEditProfileForm);
addNewCardBtn.addEventListener("click", openAddNewCardModal);

//Form Validation
const profileFormValidator = new FormValidator(config, profileModalForm);
const addCardFormValidator = new FormValidator(config, addCardModalForm);

profileFormValidator.enableValidation();
addCardFormValidator.enableValidation();
