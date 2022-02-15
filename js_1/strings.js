let email="hakanyalçınkaya@gmail.com"
let firstName="hakan"
let lastName="YALÇINKAYA"

//string karakter sayısı
console.log(email.length)

//string ilk karakteri bulmak
console.log(firstName[0])
console.log(firstName.charAt(0))

//buyuk kucuk harf
firstName=firstName.toUpperCase();
console.log(firstName)

firstName=firstName.toLowerCase();
console.log(firstName);

//string içinde bir yeri arama search eğer yoksa -1 döner
console.log(email.search("@"))

//belli bir yerden sonrasını al
console.log(email.slice(email.search("@")+1))
let index1=email.slice(email.search("@")+1);
console.log(index1.slice(0,index1.indexOf('.')));

//değiştir
email=email.replace('gmail.com','kodluyoruz.org');
console.log(email);

//İlk harfleri büyük yapmak
firstName="FIRST"
lastName="LAST"
let fullname2=`${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`
console.log(fullname2);

console.log(document.location) //location bilgisi
console.log(document.location.hostname)