// Оголошуємо об’єкт formData з полями email та message
let formData = {
  email: "",
  message: ""
};

// Ключ для зберігання даних у локальному сховищі
const STORAGE_KEY = "feedback-form-state";

// Знаходимо форму
const form = document.querySelector(".feedback-form");
const emailInput = form.elements.email;
const messageTextarea = form.elements.message;

// Функція для завантаження даних з локального сховища
const loadFormData = () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    formData = JSON.parse(savedData);
    emailInput.value = formData.email || "";
    messageTextarea.value = formData.message || "";
  }
};

// Функція для збереження даних у локальне сховище
const saveFormData = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

// Обробник події input для оновлення formData
form.addEventListener("input", (event) => {
  formData[event.target.name] = event.target.value;
  saveFormData();
});

// Обробник події submit для перевірки даних і очищення сховища
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Перевірка на заповнення полів
  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }

  // Виведення даних у консоль
  console.log(formData);

  // Очищення даних
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: "", message: "" };
  form.reset();
});

// Завантажуємо дані з локального сховища при завантаженні сторінки
loadFormData();
