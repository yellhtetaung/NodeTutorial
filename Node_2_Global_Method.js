// setTimeout(callback,time); အချိန်တစ်ခုကိုစောင့်တယ် စောင့်ပြီးတာနဲ့ အလုပ်လုပ်မယ်။ အလုပ်လုပ်ပြီးတာနဲ့ function die ဖြစ်သွားမယ်။

// setTimeout(function (){
//     console.log("I have already waited for 2 second")
// },2000);


// setInterval(callback,time); အချိန်တစ်ခုကိုစောင့်ပြီး အလုပ်လုပ်နေမယ်။ အလုပ်လုပ်ပြီးတိုင်း ဆက်အလုပ်လုပ်နေမယ်။ looping ပတ်နေသလို အလုပ်လုပ်နေမယ်။
// clearInterval(callback) setInterval ကို ရပ်ချင်ရင် သုံးတယ်။

let i = 0;
var myInter = setInterval(function (){
    i++;
    if(i == 5){
        clearInterval(myInter);
    }
    console.log(`I am start working! ${i}`);
}, 1000);