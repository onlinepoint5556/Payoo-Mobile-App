document.getElementById("login-btn").addEventListener("click", (e) => {
    e.preventDefault()
    const mobile = "01403703441";
    let convartedMobile = parseInt(mobile);

    const pin = 1234;
    let mobileNum = document.getElementById("input-number");
    let mobileNumConverted = parseInt(mobileNum.value);

    let pinNumber = document.getElementById("pin-number");
    let pinNumberConvarted = parseInt(pinNumber.value);

    if (mobileNumConverted === convartedMobile && pin === pinNumberConvarted) {
        window.location.href = "home.html";
    }
    else {
        alert("Invalid")
    }
})