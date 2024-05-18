import inquirer from "inquirer";

// initialize user balanc and pin code
let myBalance = 5000;
let myPin = 1234;

// print welcome message
console.log("welcome to code with Ishrat - ATM Machine");

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code:"
    }
])
if (pinAnswer.pin === myPin){
    console.log("pin is correct, login successfully!");
    console.log(`Current Account Balance is ${myBalance}`)

    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation:",
            choices: ["Withdraw Amount", "Check Balance"]
        }
    ])
    if (operationAns.operation === "Witdraw Amount"){
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw:"
            }
        ])
        if(amountAns.amount > myBalance){
            console.log("Inssufficiant Balance");
        }
        else{
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} Withdraw successfully`);
            console.log(`Your remaining Balance is: ${myBalance}`)
        }
    }
    else if(operationAns.operation === "Check balance"){
        console.log(`Your Account balance is: ${myBalance}`);
    }

}