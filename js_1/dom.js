let title=document.getElementById("title");
title.innerHTML="değişen bilgi";
console.log(title);


let link=document.querySelector("ul#list>li>a")
console.log(link)
link.innerHTML+=" değişti"
link.style.color="red";
link.classList.add("btn")

//prompt
let fullname=prompt("Lütfen adınızı giriniz:")
let greeting=document.querySelector("#greeting")
greeting.innerHTML=`${greeting.innerHTML} <small>${fullname}</small>`

//liste içerisindeki son elemana ulaşma
let lastChild=document.querySelector("ul#list1>li:last-child")
console.log(lastChild);
lastChild.innerHTML="son öğe değişti"

let firstChild=document.querySelector("ul#list1>li:first-child")
console.log(firstChild);
firstChild.innerHTML="ilk öğe değişti"

let ulDOM=document.querySelector("ul#list1");
let liDOM=document.createElement('li');
liDOM.innerHTML="Kendi Oluşturduğumuz Öğe";
ulDOM.append(liDOM);

//en sona ekler
let liDOM2=document.createElement('li');
liDOM2.innerHTML="Son Oluşturduğumuz Öğe"
ulDOM.prepend(liDOM2);

//class eklemek ya da class çıkarmak
let greeting2=document.querySelector("#greeting2");
greeting2.classList.add("text-primary","title2","new-info")
console.log(greeting2.classList)
greeting2.classList.remove("new-info")

let length2=document.querySelector("#greeting2")
length2.classList.length

//alıştırma
let addButton=document.querySelector("#Add");
console.log(addButton)
addButton.classList.add("button","removed")
addButton.classList.remove("removed")



// === hem değeri hem de türü eşitse
let price ="100"

console.log(price==1) //false
console.log(price==100) //true

console.log(price===1) //false
console.log(price===100) //false

//!= eşit değilse
console.log(!!2)