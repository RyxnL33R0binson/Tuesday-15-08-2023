

console.log('Hello world');
console.log('12'/2);
console.log(2*'2');
console.log('10'-2);
console.log('10'&2);
console.log(true *7);
console.log(true+10);

/***********************Conditional Statements *********************/
const z = 2;

if (z === 1) 
{
    const z = 23;
    console.log(z);
}
else 
{
    console.log("false");
};

console.log(z);


const num1 = 24;
if (num1 > 18) 
{
    console.log("You are old enough to enter");
}
else if(num1 <= 17) 
{
    console.log("You are not old enough to enter");
}
else if (num1 != 21) 
{
    console.log("You may enter, but cannot go to the bar");
}
else if (num1 === 21) 
{
    console.log("Can you enter i don't understand. Can you enter it as a number please");
}
else 
{
    console.log('This is the else statement');
}


//***********************Advanced Conditions ************************/


let age = 18;
let nightClubRequirement = 18;
let nightClubRequirementID = 24;

if(age >= nightClubRequirementID)
{
    console.log("Yuh eligible fi enter without ID");
}
else if(age => nightClubRequirement && age <= nightClubRequirementID)
{
    console.log("Yuh need ID fi enter");
}
else {
    console.log("Yuh cyan't come in")
}


//***********************Conditions using Switch statements****************** */

let scenario = 4;

switch (new Date().getDay()) 
{
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}


//************************Strings************************ */

let string1 = "Hello";
let string2 = "world";

console.log(string1.indexOf("lo"));
console.log(string2.indexOf("or"));

console.log(string1.slice(0,2));
console.log(string2.slice(3,5));


console.log("Line 22", string1.substring(2,4),"line 11");


string3 = "rainbow";
var fullString = `${string3} is learning about JavaScript and ${string1}
is his favourite`;
console.log(fullString.slice(7,14));

//***************************Functions***************************************** */

//let person = {firstName:"Ryan", lastName:"Robinson", age:24, Nationality:"Black British"};



function personalInformation (firstName, lastName, age, nationality) 
{
    /*console.log("What is your first name? "+ firstName + "\n");
    console.log("What is your last name? "+ lastName + "\n");
    console.log("What is your age? "+ age + "\n");
    console.log("What is your nationality? " +nationality +"\n");*/

    return toString = "Full name: " + firstName +" " + lastName
    + "\nAge: " + age + "\nNationality: " + nationality;

}

console.log(personalInformation("Ryan", "Robinson", "24", "Black British"));

/***********************Created Calculator************************ */

function calculate(num1 = document.getElementById("numberone").value, num2 = document.getElementById("numbertwo").value)
{

    if(document.getElementById("addition").value) 
    {
        addNumbers(num1, num2);
    }
    else if(document.getElementById("subtraction").value) 
    {
        subtractNumbers(num1, num2); 
    }
    else if (document.getElementById("multiplication").value)
    {
        multiplyNumbers(num1, num2);
    }
    else if(document.getElementById("division").value)
    {
        divideNumbers(num1, num2);
    } 
}

function addNumbers(num1, num2)
{
    console.log (parseInt(num1) + parseInt(num2));
}
function subtractNumbers(num1, num2)
{
    console.log(parseInt(num1) - parseInt(num2));
}
function multiplyNumbers(num1, num2)
{
    console.log(parseInt(num1) * parseInt(num2));
}
function divideNumbers(num1, num2)
{
    console.log(parseInt(num1) / parseInt(num2));
}


function calculate_age(dob) 
{ 
    let diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

function itemsForAge()
{
    let customerAge = prompt("Please enter you date of birth:", "");


    if(customerAge => 21)
    {
        allItems(customersAge);
    }

    else if (customerAge == 16 || customerAge == 17)
    {
        itemsFor16(customersAge);
    }
    else if (customerAge >= 11 && customerAge <=15)
    {
        itemsFor11(customersAge);
    }
    else
    {
        itemsForChildren(customersAge);
    }
}

function allItems()
{

}

//******************************Loops********************/
function reverseString(word)
{
    let temp = "";
    for(let i = word.length - 1; i >= 0; i--) 
    {
        temp = temp + word[i]; 
        console.log(temp);
    }
}

function forinLoops()
{
    const coloursList = ["Blue", "Purple", "Red", "Pink", "Yellow", "Green"];
    let temp = "";
    for(let color in coloursList)
    {
        console.log(colour);
        temp = temp + coloursList[colors] + " ";
        console.log(temp);
    };
}

function forWhileLoops()
{
    while(i < 23)
    {
        console.log("3 multiplied by " + i + " is " + i*3 + "\n");
        i++;
    }
};

function fibonacciSequence()
{
    let a = 0;
    let b = 1;
    let c = 1;
    let userInput = 10
        
    for(let i = 0; i <= userInput; i++)
    {
        a = b;
        b = c;
        c = a + b;
        
        console.log(a + " ");
    }
}

function stringContainsLetter()
{
    let string1 = "Hello";
    let string2 = "world";

    console.log(string1.indexOf("lo"));
    console.log(string2.indexOf("or"));
}

function getStringIsInArray(wrd)
{
    let ss = "";
    let cars = ["Saab", "Volvo", "BMW", "Volkswagen", "Audi", "Ford"];
    let userInput = wrd.toLowerCase();
    
    for (let i = 0; i < cars[i].length; i++) 
    {
        if (sentenceAsArray[i].equals(input)) {
            ss = "The word " + input + " is in the position: " + i;
        }
    }
    return ss; 
}