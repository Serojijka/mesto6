import "../pages/index.css";

import {
  createCard,
  deleteCard,
  likeCard,
  scaleImage,
  renderCard,
} from "./cards";

import { handleEsc, handleOverlay, openPopup, closePopup } from "./modal";

const profileTitle = document.querySelector(".profile__title");
const profileText = document.querySelector(".profile__description");
//////////////////edit//profile////////////////////////////////
const popupEditProfile = document.querySelector(".popup_type_edit");
const popupEditProfileOpenButton = document.querySelector(
  ".profile__edit-button"
);
const popupEditProfileCloseButton =
  popupEditProfile.querySelector(".popup__close");

const popupEditProfileForm = popupEditProfile.querySelector(".popup__form");
const popupEditProfileInputName = popupEditProfileForm.querySelector(
  ".popup__input_type_name"
);
const popupEditProfileInputJob = popupEditProfileForm.querySelector(
  ".popup__input_type_description"
);

//////////////////new//card////////////////////////////////
const popupNewCard = document.querySelector(".popup_type_new-card");
const popupNewCardOpenButton = document.querySelector(".profile__add-button");
const popupNewCardCloseButton = popupNewCard.querySelector(".popup__close");
const popupNewCardForm = popupNewCard.querySelector(".popup__form");
const popupNewCardInputName = popupNewCard.querySelector(
  ".popup__input_type_card-name"
);
const popupNewCardInputLink = popupNewCard.querySelector(
  ".popup__input_type_url"
);
//////////////////image//scale////////////////////////////////

const popupImageCloseButton = popupImage.querySelector(".popup__close");
/////////////////////////////////////////////////////////////////////////////////

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = popupEditProfileInputName.value;
  profileText.textContent = popupEditProfileInputJob.value;
  closePopup(popupEditProfile);
  popupEditProfileInputName.value = "";
  popupEditProfileInputJob.value = "";
}

function handleNewCardFormSubmit(evt) {
  evt.preventDefault();
  renderCard(
    popupNewCardInputName.value,
    popupNewCardInputLink.value,
    deleteCard,
    likeCard
  );
  closePopup(popupNewCard);
  popupNewCardInputName.value = "";
  popupNewCardInputLink.value = "";
}

popupEditProfileOpenButton.addEventListener("click", function () {
  openPopup(popupEditProfile);
});

popupEditProfileCloseButton.addEventListener("click", function () {
  closePopup(popupEditProfile);
});

popupNewCardOpenButton.addEventListener("click", function () {
  openPopup(popupNewCard);
});

popupNewCardCloseButton.addEventListener("click", function () {
  closePopup(popupNewCard);
});

popupImageCloseButton.addEventListener("click", function () {
  closePopup(popupImage);
});

popupEditProfileForm.addEventListener("submit", handleEditFormSubmit);

popupNewCardForm.addEventListener("submit", handleNewCardFormSubmit);
