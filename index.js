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


    const currentBalance = document.getElementById("currentBalance").innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = depositNumber + currentBalanceNumber;
    document.getElementById("currentBalance").innerText = totalBalance;


    document.getElementById("depositAmount").value= "";
})

// withdraw button event handler

const withdraw = document.getElementById("withdraw");
withdraw.addEventListener("click",function(){
    const withdrawAmount = document.getElementById("withdrawAmount").value;
    const withdrawNumber = parseFloat(withdrawAmount);

    const currentWithdraw = document.getElementById("currentWithdraw").innerText;
    const currentWithdrawNumber = parseFloat(currentWithdraw);
    const totalWithdraw = withdrawNumber + currentWithdrawNumber;
    
    document.getElementById("currentWithdraw").innerText = totalWithdraw;
 
    const currentBalance = document.getElementById("currentBalance").innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance =currentBalanceNumber - totalWithdraw;
    document.getElementById("currentBalance").innerText = totalBalance;

    document.getElementById("withdrawAmount").value= "";
})