// get secondary input with a common function
function getInputValue(secondaryInputId){
    const secondaryInput = document.getElementById(secondaryInputId);
    const secondaryValue = secondaryInput.value;
    const secondaryAmount = parseFloat(secondaryValue);
    secondaryInput.value = ' ';
    return secondaryAmount;
};
// get primary text with a common function
function updatePrimaryText(primaryId, secondaryAmount){
    const primaryInput = document.getElementById(primaryId);
    const primaryText = primaryInput.innerText;
    const primaryAmount = parseFloat(primaryText);
    primaryInput.innerText = primaryAmount + secondaryAmount;
};
// balance update with a common function
function balanceUpdate(secondaryAmount, isAdd){
    const balanceTotal = document.getElementById('balance-primary');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    if(isAdd == true){
        balanceTotal.innerText = balanceTotalAmount + secondaryAmount;
    } else{
        balanceTotal.innerText = balanceTotalAmount - secondaryAmount;
    };
};

// get deposit and update deposit total
document.getElementById('deposit-button').addEventListener('click', function() {
    const secondaryAmount = getInputValue('deposit-secondary');
  if(secondaryAmount>0){
    updatePrimaryText('deposit-primary', secondaryAmount)
    //update balance with deposit input
        balanceUpdate(secondaryAmount, true);
  };o
});

// get withdraw and update withdraw total
document.getElementById('withdraw-button').addEventListener('click', function(){
    const secondaryAmount = getInputValue('withdraw-secondary');
    // get current balance
    const balanceTotal = document.getElementById('balance-primary');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
   if(secondaryAmount>0 && secondaryAmount < balanceTotalAmount ){
    updatePrimaryText('withdraw-primary', secondaryAmount)     
    //update balance with withdraw input total
        balanceUpdate(secondaryAmount, false) 
   };
   if(secondaryAmount > balanceTotalAmount){
    alert("Sorry! You can't withdraw more than your balance amount. Please enter a less amount than your balance amount.");
   };
});













if(secondaryValue > 0){
    // start
    let textBox1 = document.getElementById('text-box1');
  
    let date = new Date();
    
    let time = `Time:- ${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    let countList = document.getElementById("depositList");
    let count = countList.childElementCount;
    let list = document.createElement("p");
    list.innerHTML = `${count + 1 }.--> Deposit Amount: ${secondaryValue}.00 TK <br> ${time}`;
    countList.appendChild(list);
    
        // end
    
        document.getElementById("deposit-primary").value = "";
}

// withdraw function


    // start
    let textBox2 = document.getElementById('text-box2');
  
    let date = new Date();
    
    let time = `Time:- ${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    let countList = document.getElementById("withdrawList");
    let count = countList.childElementCount;
    let list = document.createElement("p");
    list.innerHTML= `${count + 1 }.--> Withdraw Amount: ${newWithdrawValueNumber}.00 TK <br> ${time}`;
    countList.appendChild(list);
        // end
        document.getElementById("withdraw-field").value = "";

