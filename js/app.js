function calculateInputValue() {
  // get income input value
  let income = document.getElementById("income-input");
  let incomeValue = parseFloat(income.value);
  // get food input value
  let food = document.getElementById("food-input");
  let foodValue = parseFloat(food.value);
  // get rent input value
  let rent = document.getElementById("rent-input");
  let rentValue = parseFloat(rent.value);
  // get others input value
  let others = document.getElementById("others-input");
  let othersValue = parseFloat(others.value);
    // negative number error handle 
  if( incomeValue > 0 && foodValue >0 && rentValue > 0 && othersValue > 0 ){
        // get Total Expenses money
    let expensesMoney = foodValue + rentValue + othersValue;
    //
    if( incomeValue > expensesMoney ){
    // set expenses value
    document.getElementById("total-expenses").innerText = expensesMoney;
    let ballance = incomeValue - expensesMoney;
    document.getElementById("ballance").innerText = ballance;
    // hide error massage
    document.getElementById('income-error').style.display='none';
    document.getElementById('negative-num-error').style.display='none';
    }
    // show Expenditure is more than income error massage
    else{ 
        document.getElementById('income-error').style.display='block';
    };
  }
  // show negative number error massage 
  else{
    document.getElementById('negative-num-error').style.display='block';
  };
 

};

// event handler function 
function eventHandler(button){
    document.getElementById(button).addEventListener("click", function (e) {
        calculateInputValue();
      });
      
};
// call event handler function
eventHandler("calc-button");


document.getElementById('save-button').addEventListener("click",function(e){
    
        // save money 
        
        let income = document.getElementById("income-input");
        let incomeValue = parseFloat(income.value);
        let saveInput = document.getElementById('save-input');
        let saveInputNumber = parseFloat(saveInput.value)
        let save = incomeValue * saveInputNumber /100
       let totalSave =  document.getElementById('saving-money').innerText=save;
       let balance = document.getElementById("ballance");
       let ballanceNumber = parseFloat(balance.innerText);
       let RemainingBalance = ballanceNumber - totalSave;
       document.getElementById('remaining-balance').innerText= RemainingBalance;



   
});


