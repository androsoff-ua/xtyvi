function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

import cards from "../json/card1.json" assert {type: 'json'};

let num = smartRandom(0,7);
let index =0;

function smartRandom(min,max) {
  let num=[];
  for (let i=min; i<=max; i++){
    while (num.length != max - min) {
      let value = getRandomInRange(min, max);
      if (!num.includes(value)) {
        num.push(value);
      }
    }
  }
  console.log(num);
  return num;
  }

function showCard (cards,num, i) {
let title = document.querySelector('.card-title');
let textField = document.querySelector('.text');
let img = document.createElement('img');
img.src = cards.cards[num[i]].img;

textField.innerHTML = cards.cards[num[i]].text;
textField.appendChild(img);
title.innerHTML = cards.cards[num[i]].title;
}



$(document).ready(function(){
$('#next').click(function(){
  if(index<=5){
      index++;
      showCard(cards,num,index);
      console.log("Index ["+index+"] = "+num[index]);
  }
  else{
    console.log("Все!");
  }

})
})



showCard(cards,num, index);