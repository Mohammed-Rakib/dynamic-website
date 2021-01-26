const loginBtn = document.getElementById("login-btn");
    loginBtn.addEventListener("click", function(){
    const loginArea = document.getElementById("login-page");
    loginArea.style.display="none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display="block"
});