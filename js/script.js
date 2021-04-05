'use strict'
window.onload = () => {
  const text = "'I don't know,' said Martin. 'Watch a movie, maybe. Victoria said, 'I don't think so.'";
  const sourceText = document.querySelector('.sourceText');
  const tergetText = document.querySelector('.targetText');
  const modifyText = text.replace(/\B[^\w\s,.]/gm, "\"");
  sourceText.innerHTML = `<p>${text}</p>`;
  tergetText.innerHTML = `<p>${modifyText}</p>`;

  // ==================================

  const mainName = document.querySelector('#name');
  const mainPhone = document.querySelector('#phone');
  const mainEmail = document.querySelector('#email');
  const mainButton = document.querySelector('#mainButton');

  mainButton.addEventListener('click', validMessage);

  function validMessage(e) {
    const mainNameValue = mainName.value;
    const mainPhoneValue = mainPhone.value;
    const mainEmailValue = mainEmail.value;

    const regExpName = /[А-Яа-яA-Za-z]+/gm;
    const regExpPhone = /\+\d\(\d{3}\)\d{3}-\d{4}/gm;
    const regExpEmail = /[\w.-]+@[\w]+.[\w]+/gm;

    if (!regExpName.test(mainNameValue)) {
      mainName.classList.add('mainInputError');
      alert('Введите корректное имя !');
    } else {
      mainName.classList.remove('mainInputError');
    };


    if (!regExpPhone.test(mainPhoneValue)) {
      mainPhone.classList.add('mainInputError');
      alert('Введите корректный номер телефона !');
    } else {
      mainPhone.classList.remove('mainInputError');
    };

    if (!regExpEmail.test(mainEmailValue)) {
      mainEmail.classList.add('mainInputError');
      alert('Введите корректный E-mail !');
    } else {
      mainEmail.classList.remove('mainInputError');
    };
    
  }
};
