const placesList = document.querySelector(".places__list");
const card = document.querySelector("#card-template").content;
const popupImage = document.querySelector(".popup_type_image");
const popupImagePic = popupImage.querySelector(".popup__image");
const popupImageText = popupImage.querySelector(".popup__caption");
import { openPopup } from "./modal";

export const initialCards = [
  {
    name: "Свити Фокс",
    link: "https://sun6-22.userapi.com/impg/fkfARVKCembSv79qM7qOHB_Vw68GAfprgLboMw/9Q1MoZ948gg.jpg?size=604x404&quality=95&sign=8d40493e0f7fd9e4d75301039b8e1f4a&type=album",
  },
  {
    name: "Лухари Герл",
    link: "https://ayaznal.com/_bl/4/61845465.jpg",
  },
  {
    name: "Ева Эльфи",
    link: "https://tellygupshup.com/wp-content/uploads/2022/01/Eva-Elfie.jpg",
  },
  {
    name: "Джиа Лисса",
    link: "https://avatars.mds.yandex.net/i?id=a95b6725f71de3b8a926dfd6cdaec73e_l-5252128-images-thumbs&n=33&w=662&h=827&q=60",
  },
  {
    name: "Аня Тейлор",
    link: "https://avatars.mds.yandex.net/i?id=a9cf7a241b2f13f9c6b220b1a28a7500_l-5234007-images-thumbs&n=13",
  },
  {
    name: "Марго Робби",
    link: "https://avatars.mds.yandex.net/i?id=668f05882c021794843e60b8469d3ca1_l-5247241-images-thumbs&n=33&w=552&h=828&q=60",
  },
];

export function createCard(name, link, deleteCard, likeCard, scaleImage) {
  const cardElement = card.querySelector(".card").cloneNode(true);
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const likeButton = cardElement.querySelector(".card__like-button");
  const cardImage = cardElement.querySelector(".card__image");
  cardElement.querySelector(".card__image").src = link;
  cardElement.querySelector(".card__title").textContent = name;

  deleteButton.addEventListener("click", function (event) {
    deleteCard(event);
  });

  likeButton.addEventListener("click", function (event) {
    likeCard(event);
  });

  cardImage.addEventListener("click", function (event) {
    scaleImage(event);
  });
  return cardElement;
}

export function deleteCard(event) {
  const listItem = event.target.closest(".places__item");
  listItem.remove();
}

export function likeCard(event) {
  event.target.classList.toggle("card__like-button_is-active");
}

export function scaleImage(evt) {
  openPopup(popupImage);
  const imageUrl = evt.target.src;
  popupImagePic.src = imageUrl;
  popupImageText.textContent = popupImageText.textContent;
}

export function renderCard(name, link, deleteCard, likeCard, scaleImage) {
  placesList.prepend(createCard(name, link, deleteCard, likeCard, scaleImage));
}
initialCards.forEach(function (item) {
  renderCard(item.name, item.link, deleteCard, likeCard, scaleImage);
});
