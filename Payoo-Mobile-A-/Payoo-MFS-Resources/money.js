// // style add 
// function styleColor(color){
// color.style.background="#F4F5F7";
// color.style.border="1px solid blue"
// }
// // text-color 
// function textColor(color){
//    return document.getElementById(color).style.color="blue"
// }



// add money section 
// const moneyAddOption = document.getElementById("add-money-option")
// moneyAddOption.addEventListener("click",()=>{
// styleColor(moneyAddOption);
// textColor("add-money-option-tex")
// let addMoneySection= document.getElementById("add-money-section");
// let cashoutSection= document.getElementById("cashout-section");
// addMoneySection.style.display="block";
// cashoutSection.style.display="none";
// })

// // cashout section
// const cashout = document.getElementById("cash-out");
// cashout.addEventListener("click", function(){
// cashout.style.background="#F4F5F7";
// cashout.style.border="1px solid blue"
// document.getElementById("cashout-text").style.color="blue";
// let cashoutSection= document.getElementById("cashout-section");
// let addMoneySection= document.getElementById("add-money-section");
// cashoutSection.style.display="block";
// addMoneySection.style.display="none";
// })

// document.getElementById("add-money-btn").addEventListener("click",()=>{
//     // add money 
//     const amount = parseInt(document.getElementById("add-amount").value);
//     const accountNumber = document.getElementById("account-number").value;
//     const pinNumber = parseInt(document.getElementById("pin-number").value);
//     if(accountNumber.length !== 11){
//         return alert("account number must be 11 digit")
//     }
//     if(pinNumber !== 1234){
//         return alert("Please enter valid pin")
//     }
//     const blance = parseInt(document.getElementById("blance").innerText);
//     const totalBlance = amount + blance;
//     document.getElementById("blance").innerText = totalBlance;
//     alert( "blance Added Succesfully")

//     // console.log(blance)
// })

// // cashout 
// document.getElementById("cashout-btn").addEventListener("click",()=>{
//     // add money 
//     const amount = parseInt(document.getElementById("minas-amount").value);
//     const accountNumber = document.getElementById("cashout-account-number").value;
//     // console.log(accountNumber)
//     const pinNumber = parseInt(document.getElementById("cashout-pin-number").value);
//     if(accountNumber.length !== 11){
//         return alert("account number must be 11 digit")
//     }
//     if(pinNumber !== 1234){
//         return alert("Please enter valid pin")
//     }
//     const blance = parseInt(document.getElementById("blance").innerText);
//     const totalBlance = blance -amount;
//     document.getElementById("blance").innerText = totalBlance;
//     alert( "blance withdraw successfully")

//     // console.log(blance)
// })

