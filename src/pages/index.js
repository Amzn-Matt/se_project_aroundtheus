import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import "../pages/index.css";
import Api from "../components/Api.js";
import PopupWithDeleteCard from "../components/PopupWithDeleteCard.js";
import {
  // initialCards,
  profileEditBtn,
  profileTitleInput,
  profileDescriptionInput,
  addNewCardBtn,
  cardListElement,
  config,
  initialCards,
} from "../utils/constants.js";

let section;
let userId;

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "3776fe3f-36da-41c3-a268-0c2e1ee7c5f9",
    "Content-Type": "application/json",
  },
});

api
  .getInitialCards()
  .then((initialCards) => {
    section = new Section(
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
  })
  .catch((err) => {
    console.log(err);
  });

const deleteCardPopup = new PopupWithDeleteCard("#delete-card-modal");
deleteCardPopup.setEventListeners();

function handleDeleteBtnClick(cardId) {
  deleteCardPopup.open();
  deleteCardPopup.setSubmitAction(() => {
    api
      .deleteCard(cardId)
      .then((res) => {
        this.removeCard(res);
        deleteCardPopup.close();
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

api
  .getUserInfo()
  .then((userData) => {
    userId = userData._id;
    userInfo.setUserInfo(userData);
    console.log(userData);
  })
  .catch((err) => {
    console.log(err);
  });

//Card Section
// const section = new Section(
//   {
//     items: initialCards,
//     renderer: (data) => {
//       const cardElement = createCard(data);
//       section.addItem(cardElement);
//     },
//   },
//   cardListElement
// );

// section.renderItems();

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
  formValidators["profile-form"].resetValidation();
  profileEditPopup.open();
}

function openAddNewCardModal() {
  formValidators["card-form"].resetValidation();
  addCardPopup.open();
}

function handleProfileFormSubmit(inputValues) {
  userInfo.setUserInfo(inputValues);
  profileEditPopup.close();
}

function handleNewCardSubmit({ name, link }) {
  api
    .addNewCard({ name, link })
    .then((res) => {
      const newCardEl = createCard(res);
      section.addItem(newCardEl);
      addCardPopup.close();
    })
    .catch((err) => {
      console.log(err);
    });
}

function createCard(data) {
  const cardElement = new Card(
    data,
    "#card-template",
    handleCardClick,
    handleDeleteBtnClick
  );
  return cardElement.generateCard();
}

function handleCardClick(data) {
  cardPreviewPopup.open(data);
}

//Event Listeners
profileEditBtn.addEventListener("click", openEditProfileForm);
addNewCardBtn.addEventListener("click", openAddNewCardModal);

//Form Validation
const formValidators = {};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);

    const formName = formElement.getAttribute("name");

    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(config);
