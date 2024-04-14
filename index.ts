#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter First number", type: "number", name: "FirstNumber" },
    { message: "Enter Second number", type: "number", name: "SecondNumber" },
    {
        message: "Select Operation",
        type: "list",
        name: "Operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answer.Operator === "Addition") {
    console.log(answer.FirstNumber + answer.SecondNumber);
}
else if (answer.Operator === "Subtraction") {
    console.log(answer.FirstNumber - answer.SecondNumber);
}
else if (answer.Operator === "Multiplication") {
    console.log(answer.FirstNumber * answer.SecondNumber);
}
else if (answer.Operator === "Division") {
    console.log("The answer is " + answer.FirstNumber / answer.SecondNumber);
}
else {
    console.log("Please enter valid number ");
}
