const loginBtn = document.getElementById("login-btn");
    loginBtn.addEventListener("click", function(){
    const loginArea = document.getElementById("login-page");
    loginArea.style.display="none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display="block"
});
// deposit button event handler

const deposit = document.getElementById("deposit");
deposit.addEventListener("click",function(){
    const depositAmount = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmount);

    const currentDeposit = document.getElementById("currentDeposit").innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = depositNumber + currentDepositNumber;
    
    document.getElementById("currentDeposit").innerText = totalDeposit;
    document.getElementById("depositAmount").value= "";
})