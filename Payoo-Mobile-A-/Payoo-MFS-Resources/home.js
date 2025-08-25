// add money option 
document.getElementById("add-money-option").addEventListener("click", function () {
    let froms = document.getElementsByClassName("from");
    for (from of froms) {
        from.style.display = "none";
    }
    document.getElementById("add-money-from").style.display = "block"
})


// cashout option 
document.getElementById("cash-out").addEventListener("click", function () {
    let froms = document.getElementsByClassName("from");
    for (from of froms) {
        from.style.display = "none";
    }
    document.getElementById("cashout-from").style.display = "block"
})


// transfar-money option 
document.getElementById("transfer-money").addEventListener("click", function () {
    let froms = document.getElementsByClassName("from");
    for (from of froms) {
        from.style.display = "none";
    }
    document.getElementById("transfer-money-from").style.display = "block"
})


// get bonus option 
document.getElementById("get-bonus").addEventListener("click", function () {
    let froms = document.getElementsByClassName("from");
    for (from of froms) {
        from.style.display = "none";
    }
    document.getElementById("get-bonus-from").style.display = "block"
})



// pay bil option 
document.getElementById("pay-bil").addEventListener("click", function () {
    let froms = document.getElementsByClassName("from");
    for (from of froms) {
        from.style.display = "none";
    }
    document.getElementById("pay-bill-from").style.display = "block"
})


// transictions option 
document.getElementById("transaction").addEventListener("click", function () {
    let froms = document.getElementsByClassName("from");
    for (from of froms) {
        from.style.display = "none";
    }
    document.getElementById("transictions-from").style.display = "block"
})

//---------------------------------------------------------------------------------------------------------------

//get Input value and convart it into number 
function getInputValueNumber(id) {
    return parseInt(document.getElementById(id).value)
}

// get blance 
function getBlance() {
    return parseInt(document.getElementById("blance").innerText);
}

// money adding function 
function moneyAdd(blance, amount) {
    let newBlance = blance + amount;
    return document.getElementById("blance").innerText = newBlance;
}


// money subtract function 
function moneySubtract(blance, amount) {
    let newBlance = blance - amount;
    return document.getElementById("blance").innerText = newBlance;
}


// add button click 
// add money 
document.getElementById("add-money-btn").addEventListener("click", function () {
    // length check 
    let value = document.getElementById("account-number").value;
    if (value.length !== 11) {
        return alert("account number must be 11 digit")
    }
    // //   pin check 
    const pin = parseInt(document.getElementById("pin-number").value)
    console.log(pin)
    if (pin !== 1234) {
        return alert("invalid")
    }

    let blance = getBlance("blance");
    let amount = getInputValueNumber("add-amount");
    moneyAdd(blance, amount);
      alert("money added successfully")

})

// cashout
document.getElementById("cashout-btn").addEventListener("click", function () {
    // length check 
    let value = document.getElementById("cashout-account-number").value;
    if (value.length !== 11) {
        return alert("account number must be 11 digit")
    }
    // //   pin check 
    const pin = parseInt(document.getElementById("cashout-pin-number").value)
    // console.log(pin)
    if (pin !== 1234) {
        return alert("invalid")
    }

    let blance = getBlance("blance");
    let amount = getInputValueNumber("minas-amount");
    moneySubtract(blance, amount);
    alert("money cashout successfully")

})

// transfer money 
document.getElementById("transfer-btn").addEventListener("click", function () {
    // length check 
    let value = document.getElementById("transfer-account-number").value;
    if (value.length !== 11) {
        return alert("account number must be 11 digit")
    }
    // //   pin check 
    const pin = parseInt(document.getElementById("transfer-pin-number").value)
    console.log(pin)
    if (pin !== 1234) {
        return alert("invalid")
    }

    let blance = getBlance("blance");
    let amount = getInputValueNumber("transfer-amount");
    moneySubtract(blance, amount);
      alert("money transfered successfully")

})

// get bonus 
document.getElementById("get-bonus-btn").addEventListener("click",()=>{
     const coupon = document.getElementById("coupon").value;
    if(coupon === "Jinnah"){
      return  alert("You have got your Bonus Successfully")
    }
     alert("Invalid Coupon")
})

// pay bill 
document.getElementById("pay-bill-btn").addEventListener("click", function () {
    // //   pin check 
    const pin = parseInt(document.getElementById("pay-bill-pin").value)
    console.log(pin)
    if (pin !== 1234) {
        return alert("invalid")
    }

    let blance = getBlance("blance");
    let amount = getInputValueNumber("pay-bill-amount");
    moneySubtract(blance, amount);
      alert("Bill Payed successfully")

})