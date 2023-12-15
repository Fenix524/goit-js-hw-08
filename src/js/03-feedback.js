import { throttle } from 'throttle-debounce';
import { saveToLocalStorage } from './jsModuls/webStorade/workWithData';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', inputValue);
form.addEventListener('submit', onSubmit);

const DATA_KEY_NAME = 'feedback-form-state';

const checkValues =
  JSON.parse(localStorage.getItem(DATA_KEY_NAME)) ?? '';
const emailInput = form.querySelector('[name="email"]');
const messageInput = form.querySelector('[name="message"]');

emailInput.value = checkValues.email ?? '';
messageInput.value = checkValues.message ?? '';

const throttleFunc = throttle(500, feedbackFormData => {
  saveToLocalStorage(DATA_KEY_NAME, feedbackFormData)
});

function inputValue(e) {
  e.preventDefault();
  const { email, message } = e.currentTarget.elements;

  throttleFunc({
    email: email.value,
    message: message.value,
  });
}

function onSubmit(e) {
  e.preventDefault();
  console.log(e.currentTarget.elements);
  const { email, message } = e.currentTarget.elements;

  console.log("Відправлено наступні дані:");
  console.log(`${email.name}: ${email.value}`);
  console.log(`${message.name}: ${message.value}`);
  
  form.reset();
  localStorage.removeItem(DATA_KEY_NAME);
}

