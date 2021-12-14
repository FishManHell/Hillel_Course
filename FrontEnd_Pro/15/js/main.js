document.body.style.backgroundColor = 'black';

const wrapper = document.createElement('div');
const container = document.createElement('div');
const section = document.createElement('section');

const header = document.createElement('header');

const h1 = document.createElement('h1');
const span = document.createElement('span');

const loginForm = document.createElement('form')

const fieldsetContact= document.createElement('fieldset');
const fieldsetPersonal = document.createElement('fieldset');
const fieldsetFavoriteAnimals = document.createElement('fieldset');

const legendContact = document.createElement('legend');
const legendPersonal = document.createElement('legend');
const legendFavoriteAnimals = document.createElement('legend');

const formUserName = document.createElement('div');
const formUserNumber = document.createElement('div');
const formUserEmail = document.createElement('div');
const formUserAge = document.createElement('div');
const formUserGender = document.createElement('div');
const formPersonalQuality = document.createElement('div');

const userName = document.createElement('label');
const userPhone = document.createElement('label');
const userEmail = document.createElement('label');
const userAge = document.createElement('label');
const userGender = document.createElement('label');

const nameInput = document.createElement('input');
const phoneInput = document.createElement('input');
const emailInput = document.createElement('input');
const ageInput = document.createElement('input');
const genderInput = document.createElement('select');

const submit = document.createElement('input');

const spanSelect = document.createElement('span');
const selectOptionOne = document.createElement('option');
const selectOptionTwo = document.createElement('option');

const labelTextarea = document.createElement('label');
const textarea = document.createElement('textarea');

const animals1 = document.createElement('div');
const animals2 = document.createElement('div');

const labelChexbox1 = document.createElement('label');
const labelChexbox2 = document.createElement('label');
const labelChexbox3 = document.createElement('label');
const labelChexbox4 = document.createElement('label');
const labelChexbox5 = document.createElement('label');
const labelChexbox6 = document.createElement('label');
const labelChexbox7 = document.createElement('label');
const labelChexbox8 = document.createElement('label');

const checkbox1 = document.createElement('input');
const checkbox2 = document.createElement('input');
const checkbox3 = document.createElement('input');
const checkbox4 = document.createElement('input');
const checkbox5 = document.createElement('input');
const checkbox6 = document.createElement('input');
const checkbox7 = document.createElement('input');
const checkbox8 = document.createElement('input');

loginForm.setAttribute("action", '#');
loginForm.setAttribute("method", 'POST');

nameInput.setAttribute("type", "text");
nameInput.setAttribute("name", "text");
nameInput.setAttribute("required", "required");

phoneInput.setAttribute("type", "tel");
phoneInput.setAttribute("name", "tel");
phoneInput.setAttribute("pattern", "0-96-36-30-911");

emailInput.setAttribute("type", "email");
emailInput.setAttribute("name", "email");
emailInput.setAttribute("pattern", ".+@globex.com");
emailInput.setAttribute("required", "required");

ageInput.setAttribute("type", "text");
ageInput.setAttribute("name", "text");
ageInput.setAttribute("required", "required");

genderInput.setAttribute('name', 'gender');

submit.setAttribute("type", "submit");
submit.setAttribute("value", "Отправить информацию");

checkbox1.setAttribute("type", "checkbox");
checkbox2.setAttribute("type", "checkbox");
checkbox3.setAttribute("type", "checkbox");
checkbox4.setAttribute("type", "checkbox");
checkbox5.setAttribute("type", "checkbox");
checkbox6.setAttribute("type", "checkbox");
checkbox7.setAttribute("type", "checkbox");
checkbox8.setAttribute("type", "checkbox");

wrapper.className = "wrapper";
container.className = 'container';
section.className =  'section';
header.className = 'header';
h1.className = 'title';
span.className = 'description required';
loginForm.className = 'contact-form';
legendContact.className = 'outline-link';

fieldsetContact.className = 'outline-forms';
fieldsetPersonal.className = 'outline-forms';
fieldsetFavoriteAnimals.className = 'outline-forms';

formUserName.className = 'form-content';
formUserNumber.className = 'form-content';
formUserEmail.className = 'form-content';
formUserAge.className = 'form-content';
formUserGender.className = 'form-content';
formPersonalQuality.className = 'form-content';

userName.className = 'lable-item required';
userPhone.className = 'lable-item';
userEmail.className = 'lable-item required';

legendPersonal.className = 'person-info';

legendFavoriteAnimals.className = 'like-animals';
userAge.className = 'lable-item required';

userGender.className = 'lable-gender';
genderInput.className = 'select-gender';
selectOptionOne.className = 'gender';
selectOptionTwo.className = 'gender';

labelTextarea.className = 'label-textarea';
textarea.className = 'textarea';

nameInput.className = 'forms-control';
phoneInput.className = 'forms-control';
emailInput.className = 'forms-control';
ageInput.className = 'forms-control';

submit.className = 'contact-submit';

labelChexbox1.className = 'label-checkbox';
labelChexbox2.className = 'label-checkbox';
labelChexbox3.className = 'label-checkbox';
labelChexbox4.className = 'label-checkbox';
labelChexbox5.className = 'label-checkbox';
labelChexbox6.className = 'label-checkbox';
labelChexbox7.className = 'label-checkbox';
labelChexbox8.className = 'label-checkbox';

checkbox1.className = 'check';
checkbox2.className = 'check';
checkbox3.className = 'check';
checkbox4.className = 'check';
checkbox5.className = 'check';
checkbox6.className = 'check';
checkbox7.className = 'check';
checkbox8.className = 'check';

animals1.className = 'info-block';
animals2.className = 'info-block';

spanSelect.className = 'span-select';

h1.innerHTML = 'Форма заявки на работу в зоопаркe';
span.innerHTML = 'Пожалуйста, заполните форму. Обязательные поля помечены';
legendContact.innerHTML = 'Контактная информация';
legendPersonal.innerHTML = 'Персональная информация';
legendFavoriteAnimals.innerHTML = 'Выберите ваших любимых животных';
userName.innerHTML = 'Имя';
userPhone.innerHTML = 'Телефон';
userEmail.innerHTML = 'Email';
userAge.innerHTML = 'Возраст';
userGender.innerHTML = 'Пол';
selectOptionOne.innerHTML = 'Женщина';
selectOptionTwo.innerHTML = 'Мужчина';
spanSelect.innerHTML = 'Перечислите личные качества';

labelChexbox1.innerHTML = 'Зебра';
labelChexbox2.innerHTML = 'Кошак';
labelChexbox3.innerHTML = 'Аноконда';
labelChexbox4.innerHTML = 'Человек';
labelChexbox5.innerHTML = 'Слон';
labelChexbox6.innerHTML = 'Антилопа';
labelChexbox7.innerHTML = 'Голубь';
labelChexbox8.innerHTML = 'Краб';

wrapper.appendChild(container);
container.appendChild(header);
container.appendChild(section);
header.appendChild(h1);
header.appendChild(span);
section.appendChild(loginForm);
loginForm.appendChild(fieldsetContact);

fieldsetContact.appendChild(legendContact);
fieldsetContact.appendChild(formUserName);
fieldsetContact.appendChild(formUserNumber);
fieldsetContact.appendChild(formUserEmail);

formUserName.appendChild(userName);
formUserNumber.appendChild(userPhone);
formUserEmail.appendChild(userEmail);
formUserAge.appendChild(userAge);
formUserGender.appendChild(userGender);
formPersonalQuality.appendChild(labelTextarea);
formPersonalQuality.appendChild(textarea);

formUserName.appendChild(nameInput);
formUserNumber.appendChild(phoneInput);
formUserEmail.appendChild(emailInput);

loginForm.appendChild(fieldsetPersonal);
loginForm.appendChild(fieldsetFavoriteAnimals);

fieldsetPersonal.appendChild(legendPersonal);
fieldsetPersonal.appendChild(formUserAge);

fieldsetFavoriteAnimals.appendChild(legendFavoriteAnimals);

loginForm.appendChild(submit);
formUserAge.appendChild(ageInput);

fieldsetPersonal.appendChild(formUserGender);
fieldsetPersonal.appendChild(formPersonalQuality);

labelTextarea.prepend(spanSelect);
formUserGender.appendChild(genderInput);
genderInput.appendChild(selectOptionOne);
genderInput.appendChild(selectOptionTwo);

fieldsetFavoriteAnimals.appendChild(animals1);
fieldsetFavoriteAnimals.appendChild(animals2);

animals1.appendChild(checkbox1);
animals1.appendChild(labelChexbox1);

animals1.appendChild(checkbox2);
animals1.appendChild(labelChexbox2);

animals1.appendChild(checkbox3);
animals1.appendChild(labelChexbox3);

animals1.appendChild(checkbox4);
animals1.appendChild(labelChexbox4);

animals2.appendChild(checkbox5);
animals2.appendChild(labelChexbox5);

animals2.appendChild(checkbox6);
animals2.appendChild(labelChexbox6);

animals2.appendChild(checkbox7);
animals2.appendChild(labelChexbox7);

animals2.appendChild(checkbox8);
animals2.appendChild(labelChexbox8);

document.body.append(wrapper);