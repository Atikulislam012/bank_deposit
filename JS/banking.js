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



