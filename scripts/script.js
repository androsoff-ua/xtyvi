function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

import cards from "../json/card1.json" assert {type: 'json'};

async function elementUpdate(selector) {
  try {
    var html = await (await fetch(location.href)).text();
    var newdoc = new DOMParser().parseFromString(html, 'text/html');
    document.querySelector(selector).outerHTML = newdoc.querySelector(selector).outerHTML;
    console.log('Элемент '+selector+' был успешно обновлен');
    return true;
  } catch(err) {
    console.log('При обновлении элемента '+selector+' произошла ошибка:');
    console.dir(err);
    return false;
  }
}

function newCard (cards) {
let title = document.querySelector('.card-title');
let textField = document.querySelector('.text');
let i = getRandomInRange (0,4);
//let i = 3;
let img = document.createElement('img');
img.src = cards.cards[i].img;

textField.innerHTML = cards.cards[i].text;
textField.appendChild(img);
title.innerHTML = cards.cards[i].title;

}

function smartRandom(min,max) {
let num=[];
for (let i=min; i<=max; i++){
num[i] = getRandomInRange(min,max);
console.log(num[i]);

}
}

smartRandom(0,2);
newCard(cards);