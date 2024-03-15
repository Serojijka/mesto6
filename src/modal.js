export function handleEsc(evt) {
  if (evt.key === "Escape") {
    const activePopup = document.querySelector(".popup_is-opened");
    closePopup(activePopup);
  }
}

export const handleOverlay = function (evt) {
  const openedPopup = document.querySelector(".popup_is-opened");
  if (evt.target === openedPopup) {
    closePopup(openedPopup);
  }
};

export function openPopup(popup) {
  popup.classList.add("popup_is-opened");
  document.addEventListener("keyup", handleEsc);
  document.addEventListener("mousedown", handleOverlay);
}

export function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keyup", handleEsc);
  document.removeEventListener("mousedown", handleOverlay);
}
