// Меню переключение
const buttons = document.querySelectorAll('nav button');
const sections = document.querySelectorAll('main section');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    button.classList.add('active');

    const sectionId = button.getAttribute('data-section');
    sections.forEach(section => {
      section.id === sectionId
        ? section.classList.add('active')
        : section.classList.remove('active');
    });
  });
});

// Менеджер студентов
const studentListEl = document.getElementById('studentList');
const studentNameInput = document.getElementById('studentName');

function addStudent() {
  const name = studentNameInput.value.trim();
  if (!name) {
    alert('Введите имя студента');
    return;
  }
  const li = document.createElement('li');
  li.textContent = name;
  studentListEl.appendChild(li);
  studentNameInput.value = '';
}

// Характеристики студента — обработка формы
const profileForm = document.getElementById('profileForm');
const profileResult = document.getElementById('profileResult');

profileForm.addEventListener('submit', e => {
  e.preventDefault();
  const data = {
    ФИО: document.getElementById('fullName').value.trim(),
    Факультет: document.getElementById('faculty').value.trim(),
    Группа: document.getElementById('group').value.trim(),
    Родители: document.getElementById('parents').value.trim(),
    Доп: document.getElementById('extraInfo').value.trim(),
  };
  profileResult.innerHTML = `<h3>Сохранено:</h3><pre>${JSON.stringify(
    data,
    null,
    2
  )}</pre>`;
  profileForm.reset();
});
