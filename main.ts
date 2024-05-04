import inquirer from "inquirer";
import chalk from 'chalk';

let name= inquirer.prompt([
    {
        type:"input",
        name:'input',
        message:chalk.greenBright('Enter Operstion:'),
    }
])