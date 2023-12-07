'use strict'

export const toggleClasses = (navigation, list, img) => {
    navigation.classList.toggle("mobileNav");
    list.classList.toggle("mobileNavList");
    img.classList.toggle("mobileLogo");
  };