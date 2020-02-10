const input = document.getElementById('salary');   
const owed = document.getElementById('owed');  
const submit = document.getElementById('submit'); 
const clear = document.getElementById('clear');
const rate = document.getElementById('rate');
const earnings = document.getElementById('earnings');
const history = document.getElementById("history");
// website used for tax calculation: https://www.canada.ca/en/revenue-agency/services/tax/individuals/frequently-asked-questions-individuals/canadian-income-tax-rates-individuals-current-previous-years.html

function tax(salary, rate, constant){
  return ((salary * rate) + constant).toFixed(2);
}

function effective(salary, tax){
  return (tax/salary * 100).toFixed(2);
}

function retained(salary, tax){
  return (salary - tax).toFixed(2);
}

submit.addEventListener("click", () =>{                     
    if (input.value == ""){                                 
        owed.innerHTML = "Field is blank";                 
        owed.style.color = "red";
    }
     else if (isNaN(input.value )){                          
        owed.innerHTML = "Salary has to be a number";         
        owed.style.color = "red";
    }
    else if (input.value < 0){                              
        owed.innerHTML = "Salary can't be below 0";    
        owed.style.color = "red";
    }
    else if (input.value <= 48535){
      owed.style.color = "black";
        const taxOwed = tax(input.value, .15, 0);
        const rEarnings = retained(input.value, taxOwed);
        owed.innerHTML = "Tax Owed: $" + taxOwed;
        rate.innerHTML = "Effective tax rate is: 15%";
        earnings.innerHTML = "Retained Earnings: " + rEarnings
        array.push(store(input.value, taxOwed, "15%", rEarnings));
        createTable(array);
    }
    else if (input.value <= 97069){
      owed.style.color = "black";
      const taxOwed = tax(input.value - 48535, .205, 7280);
      const taxRate = effective(input.value, taxOwed);
      const rEarnings = retained(input.value, taxOwed);
      owed.innerHTML = "Tax Owed: " + taxOwed;
      rate.innerHTML = "Effective tax rate is: " + taxRate +'%';
      earnings.innerHTML = "Retained Earnings: " + rEarnings;
      array.push(store(input.value, taxOwed, taxRate, rEarnings));
      createTable(array);
    }
    else if (input.value <= 150473){
      owed.style.color = "black"
      const taxOwed = tax(input.value - 97069, .26, 17230);
      const taxRate = effective(input.value, taxOwed);
      const rEarnings = retained(input.value, taxOwed);
      owed.innerHTML = "Tax Owed: " + taxOwed;
      rate.innerHTML = "Effective tax rate is: " + taxRate +'%';
      earnings.innerHTML = "Retained Earnings: " + rEarnings;
      array.push(store(input.value, taxOwed, taxRate, rEarnings));
      createTable(array);
    }
    else if (input.value <= 214368){
      owed.style.color = "black"
      const taxOwed = tax(input.value - 150473, .29, 31115);
      const taxRate = effective(input.value, taxOwed);
      const rEarnings = retained(input.value, taxOwed);
      owed.innerHTML = "Tax Owed: " + taxOwed;
      rate.innerHTML = "Effective tax rate is: " + taxRate +'%';
      earnings.innerHTML = "Retained Earnings: " + rEarnings;
      array.push(store(input.value, taxOwed, taxRate, rEarnings));
      createTable(array);
    }
    else {
      owed.style.color = "black"
      const taxOwed = tax(input.value - 214368, .33, 49645);
      const taxRate = effective(input.value, taxOwed);
      const rEarnings = retained(input.value, taxOwed);
      owed.innerHTML = "Tax Owed: " + taxOwed;
      rate.innerHTML = "Effective tax rate is: " + taxRate +'%';
      earnings.innerHTML = "Retained Earnings: " + rEarnings;
      array.push(store(input.value, taxOwed, taxRate, rEarnings));
      createTable(array);
    }
});

clear.addEventListener("click", () =>{                     
   owed.innerHTML = "";
   salary.innerHTML = "";
   earnings.innerHTML = "";
   rate.innerHTML = "";
   input.value = "";
   array = [];
   history.innerHTML = "";
});


//empty array for objects
let array =[
]
  
//function to make object storing tax data
function store(inp, tax, rate, ern){
let today = new Date();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  return {
    Time: time,
    Salary: inp,
    Tax: tax,
    Rate: rate,
    Earnings: ern
  }
}

//Function to display array of objects
function createTable(tableData) {                              
  history.innerHTML = '';                                      
  for(let i = 0; i < tableData.length; i++){                   
    history.innerHTML += "Time: " + tableData[i].Time + " Salary: " + tableData[i].Salary + " Tax: " + tableData[i].Tax + " Rate: " + tableData[i].Rate + " Earnings: " + tableData[i].Earnings
    history.innerHTML += "<br>";                               
  }
}