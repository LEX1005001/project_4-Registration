// Получение данных с полей сайта
document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const login = document.getElementById("regLogin").value;
    const firstName = document.getElementById("regFirstName").value;
    const lastName = document.getElementById("regLastName").value;
    const password = document.getElementById("regPassword").value;

    if (validateFields(login, firstName, lastName, password)) {
      document.getElementById("message").innerText = "Регистрация успешна!";
    }
  });

// Функция для проверки правильности ввода данных
function validateFields(login, firstName, lastName, password) {
  const maxLength = 40;
  const isOnlyNumbers = (str) => /^\d+$/.test(str); // Проверка на только числа

  if (
    login.length > maxLength ||
    password.length > maxLength ||
    firstName.length > maxLength ||
    lastName.length > maxLength
  ) {
    document.getElementById("message").innerText =
      "Поля не должны превышать 40 символов.";
    return false;
  }

  if (!login || !password || !firstName || !lastName) {
    document.getElementById("message").innerText =
      "Все поля должны быть заполнены.";
    return false;
  }

  if (isOnlyNumbers(login)) {
    document.getElementById("message").innerText =
      "Логин не должен состоять только из чисел.";
    return false;
  }
  if (isOnlyNumbers(firstName)) {
    document.getElementById("message").innerText =
      "Имя не должно состоять только из чисел.";
    return false;
  }
  if (isOnlyNumbers(lastName)) {
    document.getElementById("message").innerText =
      "Фамилия не должна состоять только из чисел.";
    return false;
  }

  return true;
}
