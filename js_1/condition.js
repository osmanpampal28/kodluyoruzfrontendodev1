var randomsayi=Math.floor(Math.random()*10);
var tahmin=prompt("bir sayı gir ve bir rastgele sayı bulmaya çalış");
if(tahmin==randomsayi && tahmin!=null) alert("Bildin!!");
else if(tahmin=="") alert("boş giriş yaptınız!");
else if(tahmin==null) alert("giriş yapmaktan vazgeçtiniz!");
else{
    alert("bir daha dene :(, Random sayı: ",randomsayi);
}

var random1=Math.random();
var h1=document.getElementById('title');
h1.innerHTML=Math.floor(Math.random()*78);

//ternary=>  koşul ? doğruysa:yanlışsa
let userName=prompt("Kullanıcı Bilginizi Yazınız: ")
let info = document.querySelector('h1')
info.innerHTML=`${userName.length>0 ? userName : "Kullanıcı Adı Bulunamadı"}`;

let a;
console.log(Boolean(a))
>>false
