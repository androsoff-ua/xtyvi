
//textTitle.innerHTML = task.text[3];
//textField.innerHTML = '<strong>Тестовий</strong> текст завдання, який буде тут знаходитись.';

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  

function newCard () {
    let task = {
        id: [1,2,3,4,5],
        title: ['Картка 1', 'Картка 2', 'Картка 3', 'Картка 4', 'Картка 5'],
        text: ['Текст завдання 1','Текст завдання 2','Текст завдання 3','Текст завдання 4','Текст завдання 5']
    }


let textTitle = document.querySelector('.card-title');
let textField = document.querySelector('.text');
    
let i = getRandomInRange (0,4);

textTitle.innerHTML = task.title[i];
textField.innerHTML = task.text[i];
}

newCard();