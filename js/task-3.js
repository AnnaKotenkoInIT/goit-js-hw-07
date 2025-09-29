const inputLogin = document.querySelector('input#name-input');

const trimmedValues = () => {
  const inputValueTrimmed = inputLogin.value.trim();
  const outputLogin = document.querySelector('span#name-output');
  outputLogin.textContent = inputValueTrimmed || 'Anonymous';
};
inputLogin.addEventListener('input', trimmedValues);
