//document.write("Merhaba Dünya");

// alert("Merhaba Dünya");

console.log("Hello world");

//değişkenler
//var
var serverName="kodluyoruz.org";
console.log(serverName);

//let ile değişkeni boş tanımlamak
let serverName1;
console.log(serverName1) //undefined

//let ile değişkene bilgi atamak
serverName1="https://kodluyoruz.ogr";
console.log(serverName1);

//let ile değişkene bilgi atayarak tanımlamak
let password="1234";
console.log(password);

//birleştirme veya ekleme işlemi
let fullname="Hakan Yalçınkaya";
console.log(fullname+" Test Bilgisi")
fullname += " Test Bilgisi";
console.log(fullname);


//const ile bir değişken içi boş tanımlanamaz
//const ile sonradan atama da yapılmaz
const SERVER_PASSWORD="sajfasjfsdajfasdfjasd";
console.log(SERVER_PASSWORD);

//number
let price=100
let tax=0.18
let priceTax=price*tax
let total=price+priceTax
console.log(
    "Fiyat : ",price,"KDV Oranı : ",tax,"KDV Tutarı : ",priceTax,
    "Toplam Fiyat : ",total
)

//arttırma ve azaltma
let counter=320;
counter+=1;
console.log(counter); //gerisi bilindik şeyler

//üs alma
console.log("5^2 = ",5**2);

//yukarı yuvarlama
console.log("Yukarı Yuvarlama :",Math.ceil(1.2));

//aşağı yuvarlama
console.log("Aşağı Yuvarlam :",Math.floor(1.9));     

//yakına yuvarlama
console.log("Yakına Yuvarlama :",Math.round(1.2))
console.log("Yakına Yuvarlama :",Math.round(1.4))

//string sayıyı int sayıya dönüştürme
let stringNumber="11";
console.log(stringNumber);
let newNumber=Number(stringNumber);
console.log(newNumber)

//Boolean
let a;
console.log(Boolean(a))  //false çıkar

var z={2:'js'};
console.log(Boolean(z)); //true çıkar

//0, -0, null, false, NaN, undefined, ("") ->false


//typeof değişken tipini verir
console.log(
    "price: ",typeof(111)
)
console.log(
    "stringPrice: ",typeof("111")
)
console.log(
    "hasPassword: ",typeof(true)
)

//string metinsel veriyi float ve int'e dönüştürme
let number1="11";
number1=parseInt(number1)
console.log("Number1: ",number1,typeof(number1));

let number2="22px"
number2=parseInt(number2)
console.log("Number2: ",number2,typeof(number2))

let number3="11.1"
number3=Number(number3)
console.log("Number3: ",number3,typeof(number3))

let number4="11.4px"
number4=parseFloat(number4)
console.log("Number4: ",number4,typeof(number4))

//number veri tipinden string veri tipine dönüşüm
let number5=55
number5=number5.toString()
console.log("Number5: ",number5,typeof(number5))

//Template Literals `bu kullanım` bu tırnağı açtıktan sonra istediğin kadar uzat
let username="hakan";
const DOMAIN="kodluyoruz.org";
let email=username+"@"+DOMAIN;

let info=`Merhaba ${username} sitemize hoşgeldiniz.. Mail adresiniz ${email}
mail adresinin uzunluğu: ${email.length}`

console.log(info);