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
  profileEditBtn,
  avatarEditBtn,
  profileTitleInput,
  profileDescriptionInput,
  addNewCardBtn,
  cardListElement,
  config,
} from "../utils/constants.js";

let section;

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "3776fe3f-36da-41c3-a268-0c2e1ee7c5f9",
    "Content-Type": "application/json",
  },
});

//Card Section
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

//Profile Forms
const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  jobSelector: ".profile__description",
  avatarSelector: ".profile__image",
});

api
  .getUserInfo()
  .then((userData) => {
    userInfo.setUserInfo(userData);
  })
  .catch((err) => {
    console.log(err);
  });

const profileEditPopup = new PopupWithForm(
  "#edit-modal",
  handleProfileFormSubmit
);

const avatarEditPopup = new PopupWithForm(
  "#avatar-modal",
  handleNewAvatarSubmit
);

//Card Forms
const addCardPopup = new PopupWithForm("#add-modal", handleNewCardSubmit);
const cardPreviewPopup = new PopupWithImage("#preview-modal");
const deleteCardPopup = new PopupWithDeleteCard("#delete-card-modal");

//Functions
function openEditProfileForm() {
  const userData = userInfo.getUserInfo();
  profileTitleInput.value = userData.userName;
  profileDescriptionInput.value = userData.userJob;
  formValidators["profile-form"].resetValidation();
  profileEditPopup.open();
}

function openAvatarEditForm() {
  formValidators["avatar-form"].resetValidation();
  avatarEditPopup.open();
}

function openAddNewCardModal() {
  formValidators["card-form"].resetValidation();
  addCardPopup.open();
}

function handleProfileFormSubmit(inputValues) {
  api
    .editProfileInfo(inputValues)
    .then(() => {
      userInfo.setUserInfo(inputValues);
      profileEditPopup.close();
    })
    .catch((err) => {
      console.log(err);
    });
}

function handleNewAvatarSubmit(inputvalues) {
  api
    .updateProfilePicture(inputvalues)
    .then(() => {
      userInfo.setUserAvatar(inputvalues);
      avatarEditPopup.close();
    })
    .catch((err) => {
      console.log(err);
    });
}

function handleNewCardSubmit({ name, link }) {
  api
    .addNewCard({ name, link })
    .then((data) => {
      const newCardEl = createCard(data);
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
    handleDeleteBtnClick,
    handleCardLike
  );
  return cardElement.generateCard();
}

function handleCardClick(data) {
  cardPreviewPopup.open(data);
}

function handleCardLike(cardId) {
  if (this.isLiked === true) {
    api
      .removeCardLike(cardId)
      .then(() => {
        this.toggleLikes();
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    api
      .addCardLike(cardId)
      .then(() => {
        this.toggleLikes();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

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

//Event Listeners
profileEditBtn.addEventListener("click", openEditProfileForm);

addNewCardBtn.addEventListener("click", openAddNewCardModal);

avatarEditBtn.addEventListener("click", openAvatarEditForm);

profileEditPopup.setEventListeners();

avatarEditPopup.setEventListeners();

addCardPopup.setEventListeners();

cardPreviewPopup.setEventListeners();

deleteCardPopup.setEventListeners();

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
