#! /usr/bin/env node

import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import chalk from "chalk";

let Balance = 50000;

async function welcome() {
    let animation = chalkAnimation.rainbow("          *****Welcome to Easy Paisa App!*****          ")
    await new Promise ((resolve) => {
        setTimeout(resolve,50); 
     
    });
    animation.stop();


// console.log("Welcome to Easy Paisa App!");

let Answer1 = await inquirer.prompt([{
    type: "input",
    name: "person",
    prefix: ">",
    message: (chalk.blue.bold("Enter your Name/Email:"))
}])

let Answer2 = await inquirer.prompt([{

    type:"input",
    name: "password",
    prefix: ">",
    message: (chalk.greenBright("\nEnter your password"))
}])

let options1 = await inquirer.prompt([
    {
       type: "list",
       name: "operator",
       message: (chalk.bgMagenta("\nWhat do you want to select?")),
       choices: ["sign In" , "cancel"] 

    }
]);

if(options1.operator === "sign In"){
    console.log(chalk.bgBlueBright("\nWelcome! you have successfully signed In to your EasyPaisa Account"));
}

else{
console.log(chalk.magenta("\nThank you for coming to the Easy Paisa Account"));
process.exit();
}

do{

const options2 = await inquirer.prompt([
    {
        type: 'list',
        name: 'action',
        message: (chalk.gray.bold('\nPlease select an option')),
        choices: ['Send Money', 'Receive Money', 'EasyLoad', 'Check Balance', 'Bill Payment', 'Exit']
    }
])
 if(options2.action === 'Send Money'){

    console.log(chalk.yellow("\nHow much money do you want?"));
    const q1 = await inquirer.prompt([{

        type : "input",
        name:"amount1",
        prefix: "",
        message:(chalk.blueBright("\nEnter the amount = "))
    }])

    console.log(chalk.greenBright.italic(`\nMoney sent successfully to ${Answer1.person}`));
    console.log(chalk.bgGrey.bold(`\nyour remaining Balance is = ${Balance - q1.amount1}`));
 }

 else if(options2.action === 'Receive Money'){

        console.log(chalk.yellow("\nHow much money did you receive?"));

     const q2 = await inquirer.prompt([{

        type: "number",
        name: "amount2",
        prefix: ">",
        message:(chalk.blueBright("\nEnter the Amount"))
     }])

     console.log(chalk.greenBright.italic(`\n"Money received successfully to ${Answer1.person}"`));
     console.log(chalk.bgGrey.bold(`\nyour remaining Balance is = ${Balance - q2.amount2}`));
    
 }


 //  _______________________________________________________________________________________________________________________________________

 else if(options2.action === "Bill Payment"){

    console.log(chalk.bgMagentaBright("\nWhich bill payment method do you want to select?"));
    
 
 const q3 = await inquirer.prompt([{

    type: "list",
    name: "amount3",
    prefix: ">",
    message:(chalk.gray.bold("\nSelect an option:")),
    choices: ["Electricity Bill", "Water Bill", "Gas Bill"]
 }])


 if(q3.amount3 === "Electricity Bill"){
    console.log(chalk.cyanBright.bold("\nHow much money do you want to pay the electricity bill"));

const s1 = await inquirer.prompt([{

    type: "number",
    name: "a1",
    prefix:">",
    message: (chalk.blueBright("\nEnter the Amount ="))

}])
console.log(chalk.greenBright.italic("\nYou have paid Electricity Bill"));
console.log(chalk.bgGrey.bold(`\nyour remaining Balance is = ${Balance -s1.a1 }`));

}

else if(q3.amount3 === "Water Bill"){
    console.log(chalk.cyanBright.bold("How much money do you want to pay the water bill"));


const s2 = await inquirer.prompt([{
    type: "number",
    name: "a2",
    prefix:">",
    message: (chalk.blueBright("\nEnter the Amount ="))

}])
console.log(chalk.greenBright.italic("\nYou have paid Water Bill"));
console.log(chalk.bgGrey.bold(`\nyour remaining Balance is = ${Balance -s2.a2 }`));

}

else if(q3.amount3 === "Gas Bill")
{
    console.log(chalk.cyanBright.bold("\nHow much money do you want to pay the gas bill"));

    const s3 = await inquirer.prompt([{

    type: "number",
    name: "a3",
    prefix:">",
    message: (chalk.blueBright("\nEnter the Amount ="))
    }])
    console.log(chalk.greenBright.italic("\nYou have paid Gas Bill"));
    console.log(chalk.bgGrey.bold(`\nyour remaining Balance is = ${Balance -s3.a3 }`));
    
}
 }

//  _______________________________________________________________________________________________________________________________________

  else if(options2.action === "EasyLoad"){

    console.log(chalk.bgMagentaBright("\nwhich option do you want to select"))

    
 
 const q4 = await inquirer.prompt([{

    type: "list",
    name: "amount3",
    prefix: ">",
    message: (chalk.gray.bold("\nSelect an option : ")),
    choices: ["Zong", "Telenor", "Jazz", "Ufone"]
 }])


 if(q4.amount3 === "Zong"){

   
const num = await inquirer.prompt([{

    type: "number",
    name: "z",
    prefix:">",
    message: (chalk.red("\nEnter the Phone Number = "))

}])

    console.log(chalk.cyanBright.bold("\nHow much money do you want to send"));

const s5 = await inquirer.prompt([{

    type: "number",
    name: "a5",
    prefix:">",
    message: (chalk.blueBright("\nEnter the Amount"))

}])
console.log(chalk.greenBright.italic(`\nyou have successfully send ${s5.a5} to this Number: ${num.z}`))
console.log(chalk.bgGrey.bold(`your remaining Balance is = ${Balance -s5.a5 }`));
}

else if(q4.amount3 === "Telenor"){

    const num2 = await inquirer.prompt([{

        type: "number",
        name: "t",
        prefix:">",
        message: (chalk.red("\nEnter the Phone Number = "))
    
    }])
    

    console.log(chalk.cyanBright.bold("How much money do you want to send"));
    


const s6 = await inquirer.prompt([{

    type: "number",
    name: "a6",
    prefix:">",
    message: (chalk.blueBright("\nEnter the Amount"))

}])
console.log(chalk.greenBright.italic(`\nyou have successfully send ${s6.a6} to this number: ${num2.t}`))
console.log(chalk.bgGrey.bold(`\nyour remaining Balance is = ${Balance -s6.a6 }`));

}

else if(q4.amount3 === "Jazz")
{
    const num3 = await inquirer.prompt([{

        type: "number",
        name: "j",
        prefix:">",
        message: (chalk.red("\nEnter the Phone Number = "))
    
    }])
    
    console.log(chalk.cyanBright.bold("\nHow much money do you want to send"));

    const s7 = await inquirer.prompt([{

    type: "number",
    name: "a7",
    prefix:">",
    message:(chalk.blueBright("\nEnter the Amount"))
    }])

    console.log(chalk.greenBright.italic(`\nyou have successfully send ${s7.a7} to this number: ${num3.j} `))
    console.log(chalk.bgGrey.bold(`\nyour remaining Balance is = ${Balance -s7.a7}`));
    
}

else if(q4.amount3 === "Ufone")
    {

        const num4 = await inquirer.prompt([{

            type: "number",
            name: "u",
            prefix:">",
            message: (chalk.red("\nEnter the Phone Number = "))
        
        }])
        
        console.log(chalk.cyanBright.bold("\nHow much money do you want to send"));
    
        const s8 = await inquirer.prompt([{
    
        type: "number",
        name: "a8",
        prefix:">",
        message:(chalk.blueBright("\nEnter the Amount"))
        }])
    
        console.log(chalk.greenBright.italic(`\nyou have successfully send ${s8.a8}  to this number: ${num4.u} `))
        console.log(chalk.bgGrey.bold(`\nyour remaining Balance is = ${Balance -s8.a8 }`));
        
    }
 }

//  _______________________________________________________________________________________________________________________________________
else if(options2.action === 'Check Balance')
    {
console.log(chalk.bgMagentaBright(`\nyour current Balnace is ${Balance}`))
}

else if(options2.action ==='Exit')
    {
console.log(chalk.bgGreenBright('\nThank you for using  Easypaisa App'));
    
process.exit();
    } 


}while(true)

}
welcome(); 