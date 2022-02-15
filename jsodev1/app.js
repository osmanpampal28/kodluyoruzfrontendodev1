let user=prompt("Adınız Nedir?")

const weekday=[
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
]

let username=document.getElementById('myName');
if(user.trim().length>0){
    username.innerHTML=user;
}
else{
    username.innerHTML="İsim girmediniz"
}


// console.log(user)



function showTime(){
    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    let day = weekday[date.getDay()]
    
    hour = hour<10 ? "0"+hour :hour
    minute = minute<10 ? "0"+minute :minute
    second = second<10 ? "0"+second :second

    let clock = hour +":"+ minute +":"+ second +" "+ day 

    document.getElementById("myClock").innerText = clock
    var time = setTimeout(function () {
        showTime();
    },1000);
}

showTime();