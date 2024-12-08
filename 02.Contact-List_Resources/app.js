window.addEventListener('load', solve);

function solve() {
  const nameElement = document.getElementById('name');
  const phoneNumberElement = document.getElementById('phone');
  const categoryElement = document.getElementById('category');
  const addButton = document.getElementById('add-btn');

  addButton.addEventListener('click', () => {
    const name = nameElement.textContent;
    const phoneNumber = phoneNumberElement.textContent;
    const category = categoryElement.textContent;

    if (!name || !phoneNumber || !category) {
      return;
    }

    const ulElementCheckList = document.getElementById('check-list');
    const ulElementContactList = document.getElementById('contact-list');

    const liElement = document.createElement('li');
    const articleElement = document.createElement('article');
    const pNameElement = document.createElement('p');
    pNameElement.textContent = `name:${name}`;
    const pPhoneElement = document.createElement('p');
    pPhoneElement.textContent = `phone:${phoneNumber}`;
    const pCategoryElement = document.createElement('p');
    pCategoryElement.textContent = `category:${category}`;
    articleElement.appendChild(pNameElement);
    articleElement.appendChild(pPhoneElement);
    articleElement.appendChild(pCategoryElement);
    liElement.appendChild(articleElement);
    const divElement = document.createElement('div');
    divElement.className('buttons');
    const editButtonElement = document.createElement('button');
    editButtonElement.className('edit-btn');
    const saveButtonElement = document.createElement('button');
    saveButtonElement.className('save-btn');
    divElement.appendChild(editButtonElement);
    divElement.appendChild(saveButtonElement);
liElement.appendChild(divElement);
ulElementCheckList.appendChild(liElement);

nameElement.textContent = "";
phoneNumberElement.textContent = "";
categoryElement.textContent = "";

editButtonElement.addEventListener('click', () => {
nameElement.textContent = pNameElement.textContent.split(":")[1];
phoneNumberElement.textContent = pPhoneElement.textContent.split(":")[1];
categoryElement.textContent = pCategoryElement.textContent.split(":")[1];
ulElementCheckList.removeChild(liElement);
}
);  

saveButtonElement.addEventListener('click', () => {
  ulElementCheckList.removeChild(liElement);
  liElement.removeChild(divElement);
  const deleteButton = document.createElement('button');
  deleteButton.className('del-btn');
  liElement.appendChild(deleteButton);
  ulElementContactList.appendChild(liElement);

  deleteButton.addEventListener('click', () => {
    ulElementContactList.removeChild(liElement);
  })
});
 })
}

