'use strict';
/*We change anchor for phone icon can close and open menu with 
 contacts to call only on Desktop  */

const phoneIcon = document.querySelector('.icon--phone');

phoneIcon.addEventListener('click', () => {
  const value = phoneIcon.getAttribute('href');

  if (value === '#contact-top') {
    phoneIcon.setAttribute('href', '#');
  } else {
    phoneIcon.setAttribute('href', '#contact-top');
  }
});
