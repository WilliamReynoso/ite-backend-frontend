import {apiData} from "./data.js";
import Card from "./card.js";

const dataList = apiData.map((e)=> e);
console.log(dataList);
//crear grupo de tarjetas (grid)
const cardGroup = document.createElement("div");
cardGroup.className = "card-group";
// console.log(cardGroup);
dataList.forEach(element => {
    cardGroup.appendChild(Card(element));
});
// console.log(cardGroup);
document.body.appendChild(cardGroup);