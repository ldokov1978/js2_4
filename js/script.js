'use strict'
window.onload = () => {
  const text = "'I don't know,' said Martin. 'Watch a movie, maybe. Victoria said, 'I don't think so.'";
  const sourceText = document.querySelector('.sourceText');
  const tergetText = document.querySelector('.targetText');
  const modifyText = text.replace(/'/gm, "\"");
  sourceText.innerHTML = `<p>${text}</p>`;
  tergetText.innerHTML = `<p>${modifyText}</p>`;
};
