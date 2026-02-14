const form = document.getElementById('registrationForm');
const resultBox = document.getElementById('result');

const fields = {
  username: document.getElementById('username'),
  email: document.getElementById('email'),
  password: document.getElementById('password'),
  country: document.getElementById('country'),
  terms: document.getElementById('terms'),
};

const errors = {
  username: document.getElementById('usernameError'),
  email: document.getElementById('emailError'),
  password: document.getElementById('passwordError'),
  gender: document.getElementById('genderError'),
  country: document.getElementById('countryError'),
  terms: document.getElementById('termsError'),
};

function setError(key, message) {
  errors[key].textContent = message;
}

function clearError(key) {
  errors[key].textContent = '';
}

function validateForm() {
  let isValid = true;

  const username = fields.username.value.trim();
  const email = fields.email.value.trim();
  const password = fields.password.value.trim();
  const gender = form.querySelector('input[name="gender"]:checked');
  const country = fields.country.value;
  const termsAccepted = fields.terms.checked;

  if (!username) {
    setError('username', 'Username kiritilishi shart.');
    fields.username.classList.add('input-error');
    isValid = false;
  } else {
    clearError('username');
    fields.username.classList.remove('input-error');
  }

  if (!email) {
    setError('email', 'Email kiritilishi shart.');
    fields.email.classList.add('input-error');
    isValid = false;
  } else {
    clearError('email');
    fields.email.classList.remove('input-error');
  }

  if (!password) {
    setError('password', 'Parol kiritilishi shart.');
    fields.password.classList.remove('input-success');
    fields.password.classList.add('input-error');
    isValid = false;
  } else if (password.length < 6) {
    setError('password', 'Parol kamida 6 belgidan iborat bo‘lishi kerak.');
    fields.password.classList.remove('input-success');
    fields.password.classList.add('input-error');
    isValid = false;
  } else {
    clearError('password');
    fields.password.classList.remove('input-error');
    fields.password.classList.add('input-success');
  }

  if (!gender) {
    setError('gender', 'Gender tanlanishi shart.');
    isValid = false;
  } else {
    clearError('gender');
  }

  if (!country) {
    setError('country', 'Davlat tanlanishi shart.');
    fields.country.classList.add('input-error');
    isValid = false;
  } else {
    clearError('country');
    fields.country.classList.remove('input-error');
  }

  if (!termsAccepted) {
    setError('terms', 'Qoidalarga rozilik berish majburiy.');
    isValid = false;
  } else {
    clearError('terms');
  }

  return {
    isValid,
    data: {
      username,
      email,
      password,
      gender: gender ? gender.value : '',
      country,
      termsAccepted,
    },
  };
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const { isValid, data } = validateForm();

  if (!isValid) {
    resultBox.classList.add('hidden');
    resultBox.innerHTML = '';
    return;
  }

  console.log('Form data:', data);

  resultBox.innerHTML = `
    <strong>Muvaffaqiyatli ro‘yxatdan o‘tildi!</strong><br />
    Username: ${data.username}<br />
    Email: ${data.email}<br />
    Gender: ${data.gender}<br />
    Country: ${data.country}
  `;
  resultBox.classList.remove('hidden');
  form.reset();
  fields.password.classList.remove('input-success');
});
